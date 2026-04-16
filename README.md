# ⚔️ Monster Arena — V2

> *"Choose your fighter" — men denne gangen er det faktisk et spill.*

Et klasse-prosjekt som ble tatt for langt. Ingen angrer.

---

## 🧐 Hva er dette?

Et Pokémon-inspirert monster-kortspill med turn-based kamper, Firebase-leaderboard og en DJINN-karakter som er et usminkert portrett av læreren vår.

Prosjektet startet som en enkel "vis kort på en side"-oppgave. Det er ikke lenger det.

---

## 🪦 V1 — En minnestund

V1 eksisterte. Det var... noe.

| Egenskap | V1 | V2 |
|---|---|---|
| Antall JS-filer | 41 | 2 |
| Nettverksforespørsler for å laste data | 40 | 1 |
| Brukte `.map()` uten å bruke returverdien | ✅ ja | ❌ nei |
| CSS layout | `flex-wrap` og bønner | CSS Grid med `auto-fill` |
| Interaktivitet | Ingen | Turn-based battle engine |
| Database | `localStorage` på én maskin | Firebase Firestore |
| Tittel | "Choose your figher!" *(sic)* | "Choose your Fighter!" |
| Kommentert-ut duplikatkode i produksjon | ✅ ja | ❌ nei |

V1 lastet 40 separate script-filer dynamisk for å vise statiske kort.
V2 har en `data.js` og en `script.js`.

Læreren vår kalte V1-arkitekturen "pedagogisk".
Vi kaller det noe annet.

---

## ✨ Funksjoner

- **Monster-grid** — responsivt CSS Grid med `auto-fill`. Dette er hva grid er til for.
- **Turn-based battle** — velg en fighter, sloss mot en tilfeldig motstander, få livet ditt ødelagt av en DJINN med `git push --force`
- **Firebase Leaderboard** — seire og tap synkes i sanntid på tvers av alle brukere
- **Registrering** — ta et kallenavn og evig ære (eller skam)
- **Placeholder-kort** — tomme slots linker til faktiske prosjekter mens klassen fyller inn sine monstre
- **45 skapninger** — inkludert fem obskure mytologiske beist ingen har hørt om (Nuckelavee, Gashadokuro, Jorogumo, Wendigo, Baku) fordi de fortjener litt oppmerksomhet

---

## 🛠️ Teknisk stack

```
Vanilla JS      — ingen rammeverk ble skadet
Tailwind CSS    — via CDN, slik at vi slipper å tenke på CSS
Firebase        — Firestore for leaderboard
```

Ingen `node_modules` i prod. Ingen bundler. Bare tre `<script>`-tagger og viljestyrke.

---

## 🗂️ Filstruktur

```
/
├── index.html          ← én fil, tre seksjoner, ingen unnskyldninger
├── favicon.ico
├── styles.css          ← kommentarfil egentlig, Tailwind gjør jobben
├── js/
│   ├── data.js         ← ALL monster-data. Rediger din entry her.
│   ├── script.js       ← renderer + battle engine
│   └── leaderboard.js  ← Firebase-integrasjon
└── images/
    └── SHISHAN/        ← alle bilder (ja, alle)
```

---

## ⚙️ Hvordan legge til et monster

Finn din entry i `js/data.js` og fyll inn alle feltene:

```js
{
  id: "DRAGON",
  name: "Smaug den Grusomme",
  img: "./images/SHISHAN/dragon.png",
  description: "Bryter fjell med ett pust",
  color: "#8B0000",
  hp: 120,                    // ikke endre dette
  attacks: [...]              // ikke endre dette heller
}
```

Kortet ditt vil automatisk bli klikkbart og spillbart så snart alle fire felt (`name`, `img`, `description`, `color`) er fylt inn.

---

## 🏆 Leaderboard

Registrer deg med et kallenavn via **"Registrer deg"**-knappen.
Vinn kamper. Se deg selv klatre.
Tap kamper. Se deg selv falle.
Ingenting betyr noe. Alle rangeres.

---

## 🎭 DJINN

DJINN er læreren vår.

Hans angrep:
- **`git push --force`** *(42 skade)* — *"Overskriver reglene — og alt annet!"*
- **Kattedistraksjon** *(18 skade)* — *"Viser frem katten sin. Ingen klarer å fokusere lenger"*

Han lager et spill som heter Eldoria. Det debugges kontinuerlig.
Vi ønsker ham lykke til.

---

## 🔗 Credits

- **SHISHAN** — Willow the master. Han vet hvem han er.
- **Aurnor** → [aurnor-main-p6rlgb.laravel.cloud](https://aurnor-main-p6rlgb.laravel.cloud/)
- **Mobodigital** → [mobodigital.vercel.app](https://mobodigital.vercel.app/)

---

*V1 hadde `//! IKKE RØR` øverst i script.js.*
*Vi rørte.*
