// ─── FIREBASE CONFIG ─────────────────────────────────────────────────────────

firebase.initializeApp({
  apiKey:            "AIzaSyBfzVXCn9NBmgeQ-JpOUvQUCLLjQtV8ENs",
  authDomain:        "monster-arena-15811.firebaseapp.com",
  projectId:         "monster-arena-15811",
  storageBucket:     "monster-arena-15811.firebasestorage.app",
  messagingSenderId: "196192089200",
  appId:             "1:196192089200:web:e350ca9fc722c5c60270b5",
});

const db = firebase.firestore();
const playersCol = db.collection("players");

// ─── LOKAL SPILLERINFO ────────────────────────────────────────────────────────

const STORAGE_KEY = "arena_player";

function getPlayer() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function savePlayerLocally(player) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}

// ─── FIRESTORE-KALL ───────────────────────────────────────────────────────────

async function dbRegisterPlayer(name) {
  const existing = getPlayer();

  if (existing) {
    // Oppdater navn i Firestore om de registrerer seg på nytt
    await playersCol.doc(existing.id).update({ name });
    const updated = { ...existing, name };
    savePlayerLocally(updated);
    return updated;
  }

  // Ny spiller
  const ref = await playersCol.add({ name, wins: 0, losses: 0 });
  const player = { id: ref.id, name, wins: 0, losses: 0 };
  savePlayerLocally(player);
  return player;
}

async function dbFetchLeaderboard() {
  const snapshot = await playersCol
    .orderBy("wins", "desc")
    .limit(10)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function dbRecordResult(playerId, won) {
  const increment = firebase.firestore.FieldValue.increment(1);
  await playersCol.doc(playerId).update(
    won ? { wins: increment } : { losses: increment }
  );
}

// ─── BATTLE-HOOK (kalles fra script.js) ──────────────────────────────────────

window.recordBattleResult = async function (won) {
  const player = getPlayer();
  if (!player) return; // ikke registrert — ingen score
  await dbRecordResult(player.id, won);
};

// ─── LEADERBOARD-PANEL ───────────────────────────────────────────────────────

async function openLeaderboard() {
  document.getElementById("leaderboard-panel").classList.remove("hidden");
  const list = document.getElementById("leaderboard-list");
  list.innerHTML = `<p class="text-center text-white/30 text-sm py-10">Laster...</p>`;

  try {
    const entries = await dbFetchLeaderboard();

    if (!entries.length) {
      list.innerHTML = `<p class="text-center text-white/30 text-sm py-10">Ingen oppføringer ennå — vær den første!</p>`;
      return;
    }

    list.innerHTML = entries
      .map((e, i) => {
        const medal = ["🥇", "🥈", "🥉"][i] ?? `${i + 1}.`;
        const total = e.wins + e.losses;
        const ratio = total > 0 ? Math.round((e.wins / total) * 100) : 0;
        return `
          <div class="flex items-center gap-4 px-6 py-3 hover:bg-white/5 transition-colors">
            <span class="text-xl w-8 text-center">${medal}</span>
            <span class="flex-1 font-bold text-white truncate">${e.name}</span>
            <span class="text-sm text-green-400 font-semibold">${e.wins}W</span>
            <span class="text-sm text-red-400 font-semibold">${e.losses}L</span>
            <span class="text-xs text-white/40 w-10 text-right">${ratio}%</span>
          </div>
        `;
      })
      .join("");
  } catch (err) {
    list.innerHTML = `<p class="text-center text-red-400 text-sm py-10">Kunne ikke laste leaderboard.</p>`;
    console.error(err);
  }
}

function closeLeaderboard() {
  document.getElementById("leaderboard-panel").classList.add("hidden");
}

// ─── REGISTER-MODAL ──────────────────────────────────────────────────────────

function openRegister() {
  const existing = getPlayer();
  if (existing) {
    document.getElementById("register-name").value = existing.name;
  }
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("register-success").classList.add("hidden");
  document.getElementById("register-error").classList.add("hidden");
  document.getElementById("register-modal").classList.remove("hidden");
}

function closeRegister() {
  document.getElementById("register-modal").classList.add("hidden");
}

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("register-name").value.trim();
  const errorEl = document.getElementById("register-error");

  if (name.length < 2) {
    errorEl.textContent = "Kallenavnet må være minst 2 tegn.";
    errorEl.classList.remove("hidden");
    return;
  }

  const submitBtn = e.target.querySelector("button[type=submit]");
  submitBtn.disabled = true;
  submitBtn.textContent = "Lagrer...";

  try {
    const player = await dbRegisterPlayer(name);
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("register-success").classList.remove("hidden");
    document.getElementById("register-success-msg").textContent =
      `Velkommen til arenaen, ${player.name}!`;
  } catch (err) {
    errorEl.textContent = "Noe gikk galt. Prøv igjen.";
    errorEl.classList.remove("hidden");
    console.error(err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Lagre";
  }
});

// ─── EVENT LISTENERS ─────────────────────────────────────────────────────────

document.getElementById("open-leaderboard-btn").addEventListener("click", openLeaderboard);
document.getElementById("close-leaderboard-btn").addEventListener("click", closeLeaderboard);
document.getElementById("open-register-btn").addEventListener("click", openRegister);
document.getElementById("close-register-btn").addEventListener("click", closeRegister);

document.getElementById("leaderboard-panel").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLeaderboard();
});
document.getElementById("register-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeRegister();
});
