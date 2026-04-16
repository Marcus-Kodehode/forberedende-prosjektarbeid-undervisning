const LOGOS = ["./images/logo1.png", "./images/logo2.png"];
const LOGO_LINKS = [
  "https://aurnor-main-p6rlgb.laravel.cloud/",
  "https://mobodigital.vercel.app/",
];

const selectionScreen = document.getElementById("selection-screen");
const battleScreen    = document.getElementById("battle-screen");
const container       = document.querySelector(".container");

let battleState = null;

// ─── CARD GRID ────────────────────────────────────────────────────────────────

MONSTERS.forEach((monster, index) => {
  const { id, name, img, description, color } = monster;
  const filled = name && img && description && color;

  const logoIndex = index % 2;
  const isLogoCard = !filled && !img; // har bilde men ikke full data = partial, uten bilde = logo

  const card = document.createElement("div");
  card.className = [
    "group relative flex flex-col items-center gap-3 p-4 rounded-2xl",
    "border border-white/10 transition-all duration-300",
    filled || isLogoCard
      ? "cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-black/80"
      : "cursor-default",
    filled
      ? "hover:border-amber-400/40"
      : isLogoCard
        ? "hover:border-white/30"
        : "",
  ].join(" ");
  card.style.backgroundColor = filled ? color : "#111827";

  if (filled) {
    const badge = document.createElement("div");
    badge.className = "absolute inset-0 flex items-center justify-center rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-amber-400 font-bold text-sm tracking-wider";
    badge.textContent = "⚔️ KJEMPE!";
    card.appendChild(badge);
  } else if (isLogoCard) {
    const badge = document.createElement("div");
    badge.className = "absolute inset-0 flex items-center justify-center rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/70 font-bold text-xs tracking-wider px-2 text-center";
    badge.textContent = logoIndex === 0 ? "🔗 aurnor.no" : "🔗 mobodigital.no";
    card.appendChild(badge);
  }

  const title = document.createElement("h2");
  title.className = `text-sm font-bold text-center tracking-wider uppercase ${filled ? "text-white" : "text-white/50"}`;
  title.textContent = filled ? name : id;

  const image = document.createElement("img");
  image.className = "h-40 w-full object-contain rounded-lg";
  image.src = img || LOGOS[index % 2];
  image.alt = name || id;

  const desc = document.createElement("p");
  desc.className = `text-xs text-center italic min-h-8 ${filled ? "text-white/90" : "text-white/30"}`;
  desc.textContent = filled ? `"${description}!"` : "???";

  if (filled) {
    card.addEventListener("click", () => startBattle(monster));
  } else if (isLogoCard) {
    card.addEventListener("click", () => window.open(LOGO_LINKS[logoIndex], "_blank"));
  }

  card.append(title, image, desc);
  container.appendChild(card);
});

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function filledMonsters() {
  return MONSTERS.filter(m => m.name && m.img && m.description && m.color);
}

function calcDamage(base) {
  return Math.floor(base * (0.85 + Math.random() * 0.3));
}

function hpColor(pct) {
  if (pct > 60) return "bg-green-400";
  if (pct > 30) return "bg-yellow-400";
  return "bg-red-500";
}

// ─── BATTLE START ─────────────────────────────────────────────────────────────

function startBattle(playerMonster) {
  const opponents = filledMonsters().filter(m => m.id !== playerMonster.id);
  if (!opponents.length) return;

  const enemy = opponents[Math.floor(Math.random() * opponents.length)];

  battleState = {
    player:   playerMonster,
    enemy:    enemy,
    playerHP: playerMonster.hp,
    enemyHP:  enemy.hp,
    active:   true,
  };

  selectionScreen.classList.add("hidden");
  battleScreen.classList.remove("hidden");
  renderBattle();
}

// ─── BATTLE UI ────────────────────────────────────────────────────────────────

function renderBattle() {
  const { player, enemy } = battleState;

  battleScreen.innerHTML = `
    <div class="w-full max-w-2xl mx-auto flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">

      <!-- Enemy -->
      <div class="flex justify-between items-center p-6 gap-4" style="background-color:${enemy.color}">
        <div class="flex flex-col gap-2 flex-1 min-w-0">
          <p class="text-xs uppercase tracking-widest text-white/60">Motstander</p>
          <h3 class="text-2xl font-black text-white truncate">${enemy.name}</h3>
          <div class="flex items-center gap-3">
            <div class="flex-1 bg-black/30 rounded-full h-3 overflow-hidden">
              <div id="enemy-hp-bar" class="h-full rounded-full transition-all duration-500 bg-green-400" style="width:100%"></div>
            </div>
            <span id="enemy-hp-text" class="text-sm font-bold text-white/80 tabular-nums w-20 text-right shrink-0">${enemy.hp} / ${enemy.hp}</span>
          </div>
        </div>
        <img src="${enemy.img}" alt="${enemy.name}" class="h-28 w-28 object-contain drop-shadow-lg shrink-0">
      </div>

      <!-- Player -->
      <div class="flex flex-row-reverse justify-between items-center p-6 gap-4" style="background-color:${player.color}">
        <div class="flex flex-col gap-2 flex-1 min-w-0 items-end text-right">
          <p class="text-xs uppercase tracking-widest text-white/60">Du</p>
          <h3 class="text-2xl font-black text-white truncate">${player.name}</h3>
          <div class="flex items-center gap-3">
            <span id="player-hp-text" class="text-sm font-bold text-white/80 tabular-nums w-20 text-left shrink-0">${player.hp} / ${player.hp}</span>
            <div class="flex-1 bg-black/30 rounded-full h-3 overflow-hidden">
              <div id="player-hp-bar" class="h-full rounded-full transition-all duration-500 bg-green-400" style="width:100%"></div>
            </div>
          </div>
        </div>
        <img src="${player.img}" alt="${player.name}" class="h-28 w-28 object-contain drop-shadow-lg shrink-0">
      </div>

      <!-- Battle log -->
      <div class="bg-gray-950 border-t border-white/10 p-4 min-h-16 flex items-center">
        <p id="battle-log" class="text-amber-400 font-medium">⚔️ Kampen begynner! Velg et angrep.</p>
      </div>

      <!-- Attack buttons -->
      <div id="attack-area" class="grid grid-cols-2 gap-3 p-4 bg-gray-900 rounded-b-2xl">
        ${player.attacks.map((atk, i) => `
          <button data-attack="${i}" class="flex flex-col items-start gap-1 p-3 rounded-xl bg-white/10 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 transition-all duration-200 text-left">
            <span class="font-bold text-white text-sm">${atk.name}</span>
            <span class="text-xs text-white/50 italic leading-tight">${atk.flavor}</span>
            <span class="text-xs text-amber-400/80 font-semibold mt-1">Skade: ~${atk.damage}</span>
          </button>
        `).join("")}
      </div>
    </div>

    <button id="back-btn" class="mt-5 text-sm text-white/40 hover:text-white/70 transition-colors duration-200">
      ← Tilbake til valg
    </button>
  `;

  document.querySelectorAll("[data-attack]").forEach(btn => {
    btn.addEventListener("click", () => playerAttack(parseInt(btn.dataset.attack)));
  });
  document.getElementById("back-btn").addEventListener("click", returnToSelection);
}

// ─── HP UPDATE ────────────────────────────────────────────────────────────────

function updateHP() {
  const { player, enemy, playerHP, enemyHP } = battleState;

  const pPct = Math.max(0, (playerHP / player.hp) * 100);
  const ePct = Math.max(0, (enemyHP  / enemy.hp)  * 100);

  const pBar = document.getElementById("player-hp-bar");
  const eBar = document.getElementById("enemy-hp-bar");

  pBar.style.width = `${pPct}%`;
  pBar.className = `h-full rounded-full transition-all duration-500 ${hpColor(pPct)}`;
  document.getElementById("player-hp-text").textContent = `${Math.max(0, playerHP)} / ${player.hp}`;

  eBar.style.width = `${ePct}%`;
  eBar.className = `h-full rounded-full transition-all duration-500 ${hpColor(ePct)}`;
  document.getElementById("enemy-hp-text").textContent = `${Math.max(0, enemyHP)} / ${enemy.hp}`;
}

function setLog(msg) {
  const el = document.getElementById("battle-log");
  if (el) el.textContent = msg;
}

function setAttacksEnabled(enabled) {
  document.querySelectorAll("[data-attack]").forEach(btn => {
    btn.disabled = !enabled;
    btn.classList.toggle("opacity-40",       !enabled);
    btn.classList.toggle("cursor-not-allowed", !enabled);
    btn.classList.toggle("pointer-events-none", !enabled);
  });
}

// ─── TURN LOGIC ───────────────────────────────────────────────────────────────

function playerAttack(i) {
  if (!battleState?.active) return;

  const atk = battleState.player.attacks[i];
  const dmg = calcDamage(atk.damage);
  battleState.enemyHP -= dmg;

  setAttacksEnabled(false);
  setLog(`${battleState.player.name} bruker ${atk.name} — ${dmg} skade! ${atk.flavor}`);
  updateHP();

  if (battleState.enemyHP <= 0) {
    setTimeout(() => endBattle(true), 1300);
    return;
  }

  setTimeout(enemyTurn, 1600);
}

function enemyTurn() {
  const atk = battleState.enemy.attacks[Math.floor(Math.random() * 2)];
  const dmg = calcDamage(atk.damage);
  battleState.playerHP -= dmg;

  setLog(`${battleState.enemy.name} svarer med ${atk.name} — ${dmg} skade! ${atk.flavor}`);
  updateHP();

  if (battleState.playerHP <= 0) {
    setTimeout(() => endBattle(false), 1300);
    return;
  }

  setTimeout(() => {
    setLog("⚔️ Din tur — velg et angrep!");
    setAttacksEnabled(true);
  }, 1300);
}

// ─── END BATTLE ───────────────────────────────────────────────────────────────

function endBattle(won) {
  battleState.active = false;
  const { player, enemy } = battleState;

  if (typeof window.recordBattleResult === "function") {
    window.recordBattleResult(won);
  }

  setLog(
    won
      ? `🏆 ${player.name} vinner! ${enemy.name} er beseiret!`
      : `💀 ${enemy.name} vinner! ${player.name} ble beseiret...`
  );

  const area = document.getElementById("attack-area");
  area.innerHTML = `
    <button id="retry-btn" class="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all">
      ⚔️ Prøv igjen
    </button>
    <button id="new-fighter-btn" class="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/10">
      ← Velg ny fighter
    </button>
  `;

  const savedPlayer = battleState.player;
  document.getElementById("retry-btn").addEventListener("click", () => startBattle(savedPlayer));
  document.getElementById("new-fighter-btn").addEventListener("click", returnToSelection);
}

// ─── RETURN ───────────────────────────────────────────────────────────────────

function returnToSelection() {
  battleState = null;
  battleScreen.classList.add("hidden");
  selectionScreen.classList.remove("hidden");
}
