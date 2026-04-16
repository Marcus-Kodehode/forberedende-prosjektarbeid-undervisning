// Monster data — rediger din egen entry her!
// Fyll inn: name, img (URL eller lokal sti), description, color
// attacks: to angrep med name, damage (base), og flavor (kort vittig tekst)

const MONSTERS = [
  {
    id: "ANGEL", name: "Erkeengelen", img: "./images/SHISHAN/angel.png", description: "Guds videresender av straff — og dårlige nyheter", color: "#1a2a5c",
    hp: 90,
    attacks: [
      { name: "Holy Smite",      damage: 22, flavor: "Lysene fra himmelen straffer deg!" },
      { name: "Righteous Shield", damage: 14, flavor: "Deflekterer angrep med gudommelig kraft" },
    ],
  },
  {
    id: "BASILISK", name: "Basilisken", img: "./images/SHISHAN/basilisk.png", description: "Et blikk og du er toast", color: "#1a4a1a",
    hp: 80,
    attacks: [
      { name: "Petrifying Gaze", damage: 30, flavor: "Et blikk og du er toast!" },
      { name: "Venomous Bite",   damage: 18, flavor: "Giften sprer seg raskt" },
    ],
  },
  {
    id: "BEHEMOTH", name: "Behemothen", img: "./images/SHISHAN/behemoth.png", description: "Så stor at serveren krasjer av å laste bildet", color: "#3d2b1a",
    hp: 125,
    attacks: [
      { name: "Earthshatter", damage: 28, flavor: "Bakken krakelerer under enorm tyngde" },
      { name: "Stampede",     damage: 22, flavor: "Umulig å stoppe" },
    ],
  },
  {
    id: "CENTAUR", name: "Centaur", img: "./images/SHISHAN/centaur.png", description: "Løper fortere enn wifi på skolen", color: "#3a2010",
    hp: 90,
    attacks: [
      { name: "Arrow Storm",    damage: 20, flavor: "Hundrevis av piler fyller himmelen" },
      { name: "Warhoof Charge", damage: 26, flavor: "Galopperer mot deg med fullt trykk" },
    ],
  },
  {
    id: "CERBERUS", name: "Cerberus", img: "./images/SHISHAN/cerberus.png", description: "Tre hoder, én hjerne — det funker likevel", color: "#2a0808",
    hp: 100,
    attacks: [
      { name: "Triple Bite",    damage: 30, flavor: "Tre hoder, tre ganger mer smerte" },
      { name: "Hellfire Bark",  damage: 18, flavor: "Et gjø som setter ild til alt i nærheten" },
    ],
  },
  {
    id: "CHIMERA", name: "Chimæra", img: "./images/SHISHAN/chimera.png", description: "Løve foran, geit i midten, slange bak — satt sammen på en fredag", color: "#4a1a0a",
    hp: 85,
    attacks: [
      { name: "Fire Breath",    damage: 25, flavor: "Flammer fra løvens gap" },
      { name: "Venomous Sting", damage: 20, flavor: "Skorpionhalen treffer uten forvarsel" },
    ],
  },
  {
    id: "CYCLOPS", name: "Cyclops", img: "./images/SHISHAN/cyclops.png", description: "Synskorrigering er dyrt når du bare har ett øye — men en neve er billig", color: "#3a2a10",
    hp: 115,
    attacks: [
      { name: "Boulder Hurl", damage: 30, flavor: "Et fjell kastet som en stein" },
      { name: "Ground Slam",  damage: 22, flavor: "Bakken sprekker under ett slag" },
    ],
  },
  {
    id: "DEMON", name: "Demon", img: "./images/SHISHAN/demon.png", description: "Helvetes janitor — tar seg av det skitne arbeidet ingen andre vil gjøre", color: "#3a0505",
    hp: 90,
    attacks: [
      { name: "Soul Rend",      damage: 25, flavor: "River sjelen ut av kroppen" },
      { name: "Hellfire Blast", damage: 22, flavor: "Ild fra de dypeste avgrunner" },
    ],
  },
  {
    id: "DEVIL", name: "Devil", img: "./images/SHISHAN/devil.png", description: "Sjefen i helvete — har en kontrakt du aldri burde skrevet under på", color: "#5a0808",
    hp: 95,
    attacks: [
      { name: "Eternal Flame",   damage: 28, flavor: "En flamme som aldri slukner" },
      { name: "Deal with Devil", damage: 15, flavor: "Du taper alltid i det lange løp" },
    ],
  },
  {
    id: "DJINN", name: "Djinn", img: "./images/SHISHAN/djinn.png", description: "Debugger Eldoria, koser med katter, og kaller sloppy JS for 'pedagogisk'", color: "#1a1a5e",
    hp: 70,
    attacks: [
      { name: "git push --force", damage: 42, flavor: "Overskriver reglene — og alt annet!" },
      { name: "Kattedistraksjon", damage: 18, flavor: "Viser frem katten sin. Ingen klarer å fokusere lenger" },
    ],
  },
  {
    id: "DRAGON", name: "", img: "", description: "", color: "",
    hp: 120,
    attacks: [
      { name: "Dragonfyre",  damage: 35, flavor: "Fortærer alt i et hav av flammer" },
      { name: "Wing Tempest", damage: 20, flavor: "Vingeslagene skaper orkan" },
    ],
  },
  {
    id: "ELEMENTAL", name: "", img: "", description: "", color: "",
    hp: 85,
    attacks: [
      { name: "Lightning Surge", damage: 28, flavor: "Millioner volt i ett slag" },
      { name: "Magma Fist",      damage: 20, flavor: "Smelter alt det berører" },
    ],
  },
  {
    id: "FENRIR", name: "", img: "", description: "", color: "",
    hp: 100,
    attacks: [
      { name: "Frost Howl",      damage: 22, flavor: "Kulden fra Niflheim i ett hyl" },
      { name: "World Eater Bite", damage: 32, flavor: "Sterk nok til å svelge solen" },
    ],
  },
  {
    id: "GARGOYLE", name: "", img: "", description: "", color: "",
    hp: 90,
    attacks: [
      { name: "Stone Dive",     damage: 22, flavor: "Dykker fra himmelen som et prosjektil" },
      { name: "Petrify Strike", damage: 18, flavor: "Berøringen gjør deg til stein" },
    ],
  },
  {
    id: "GOLEM", name: "", img: "", description: "", color: "",
    hp: 130,
    attacks: [
      { name: "Titan Fist",    damage: 28, flavor: "En neve stor som en bil" },
      { name: "Rock Barrage",  damage: 20, flavor: "Haglstorm av stein" },
    ],
  },
  {
    id: "GRIFFIN", name: "", img: "", description: "", color: "",
    hp: 95,
    attacks: [
      { name: "Talon Sweep",    damage: 24, flavor: "Klørne feier deg av banen" },
      { name: "Sonic Screech",  damage: 18, flavor: "Øredøvende skrik" },
    ],
  },
  {
    id: "HARPY", name: "", img: "", description: "", color: "",
    hp: 75,
    attacks: [
      { name: "Gale Slash",     damage: 22, flavor: "Vinden kutter skarpere enn et sverd" },
      { name: "Banshee Scream", damage: 15, flavor: "Skriket gjennomtrenger alt" },
    ],
  },
  {
    id: "HYDRA", name: "", img: "", description: "", color: "",
    hp: 115,
    attacks: [
      { name: "Nine-Head Strike", damage: 28, flavor: "Ni hoder angriper på en gang" },
      { name: "Acid Spray",       damage: 20, flavor: "Smelter rustning på sekunder" },
    ],
  },
  {
    id: "IMP", name: "", img: "", description: "", color: "",
    hp: 65,
    attacks: [
      { name: "Mischief Claw", damage: 16, flavor: "Liten, men smertefullt presis" },
      { name: "Chaos Spark",   damage: 24, flavor: "Ustyrlig energi uten kontroll" },
    ],
  },
  {
    id: "KITSUNE", name: "", img: "", description: "", color: "",
    hp: 80,
    attacks: [
      { name: "Fox Fire",        damage: 24, flavor: "Mystisk ild som lurer deg" },
      { name: "Nine-Tail Whip",  damage: 20, flavor: "Ni haler i ett koordinert slag" },
    ],
  },
  {
    id: "KRAKEN", name: "", img: "", description: "", color: "",
    hp: 120,
    attacks: [
      { name: "Tentacle Crush", damage: 30, flavor: "Tentaklene klemmer livet ut" },
      { name: "Ink Blindness",  damage: 14, flavor: "Du ser ingenting i blekket" },
    ],
  },
  {
    id: "LEVIATHAN", name: "", img: "", description: "", color: "",
    hp: 130,
    attacks: [
      { name: "Tidal Devastation", damage: 35, flavor: "En bølge som sluker land" },
      { name: "Depth Charge",      damage: 22, flavor: "Trykk fra havets bunn" },
    ],
  },
  {
    id: "LICH", name: "", img: "", description: "", color: "",
    hp: 85,
    attacks: [
      { name: "Death Coil",   damage: 28, flavor: "Nekromantisk energi kveler deg" },
      { name: "Bone Volley",  damage: 18, flavor: "Et regn av bein" },
    ],
  },
  {
    id: "MANTICORE", name: "", img: "", description: "", color: "",
    hp: 95,
    attacks: [
      { name: "Spike Volley", damage: 24, flavor: "Giftige pigger fra halen" },
      { name: "Mane Slash",   damage: 20, flavor: "Kraftige klør flenger deg" },
    ],
  },
  {
    id: "MEDUSA", name: "", img: "", description: "", color: "",
    hp: 80,
    attacks: [
      { name: "Stone Gaze",    damage: 30, flavor: "Blikket forvandler deg til stein" },
      { name: "Serpent Strike", damage: 18, flavor: "Slangene i håret biter" },
    ],
  },
  {
    id: "MINOTAUR", name: "", img: "", description: "", color: "",
    hp: 105,
    attacks: [
      { name: "Labyrinth Axe", damage: 30, flavor: "Ingen flykter fra labyrinten" },
      { name: "Bull Charge",   damage: 25, flavor: "Raser mot deg med full kraft" },
    ],
  },
  {
    id: "OGRE", name: "", img: "", description: "", color: "",
    hp: 110,
    attacks: [
      { name: "Club Demolish", damage: 28, flavor: "Klubben knuser alt i sin vei" },
      { name: "Belly Slam",    damage: 20, flavor: "Kaster seg over deg" },
    ],
  },
  {
    id: "ORC", name: "Orc", img: "./images/SHISHAN/orc.png", description: "Kriger med ett humør: sint — og ett verktøy: øks", color: "#2a3a0a",
    hp: 100,
    attacks: [
      { name: "Berserker Axe", damage: 30, flavor: "Raser uten frykt" },
      { name: "Battle Shout",  damage: 14, flavor: "Skriket alene gjør deg svak i knærne" },
    ],
  },
  {
    id: "PEGASUS", name: "Pegasus", img: "./images/SHISHAN/pegasus.png", description: "Hest med vinger og et ego på størrelse med himmelen den flyr i", color: "#1a3a5a",
    hp: 85,
    attacks: [
      { name: "Thunder Hoof", damage: 24, flavor: "Lynet følger hvert steg" },
      { name: "Sky Dive",     damage: 20, flavor: "Stuper ned fra skyene" },
    ],
  },
  {
    id: "PHOENIX", name: "", img: "", description: "", color: "",
    hp: 90,
    attacks: [
      { name: "Inferno Wing",  damage: 28, flavor: "Vingene etterlater ild" },
      { name: "Rebirth Flame", damage: 18, flavor: "Ild som ikke kan slukkes" },
    ],
  },
  {
    id: "SATYR", name: "", img: "", description: "", color: "",
    hp: 75,
    attacks: [
      { name: "Wild Horn Gore", damage: 24, flavor: "Hornene treffer hardt" },
      { name: "Panic Flute",    damage: 14, flavor: "Melodien fyller deg med panikk" },
    ],
  },
  {
    id: "SHISHAN", name: "Willow the master", img: "./images/SHISHAN/barberian.png", description: "Ankomst alltid dramatisk, exit alltid episk — spør bare ham selv", color: "darkred",
    hp: 95,
    attacks: [
      { name: "Barbarian Roar",   damage: 28, flavor: "Et brøl som knuser viljen" },
      { name: "Berserker Strike", damage: 24, flavor: "Hulter til bulter, men effektivt" },
    ],
  },
  {
    id: "SPHINX", name: "", img: "", description: "", color: "",
    hp: 90,
    attacks: [
      { name: "Riddle Curse", damage: 25, flavor: "Svarer du feil, tar det livet av deg" },
      { name: "Desert Wind",  damage: 20, flavor: "Sand blinder deg fullstendig" },
    ],
  },
  {
    id: "TROLL", name: "Troll", img: "./images/SHISHAN/troll.png", description: "Bor under broen, liker ikke morgenfolk — eller folk generelt", color: "#1a3a10",
    hp: 115,
    attacks: [
      { name: "Rock Toss",        damage: 22, flavor: "Stein stor som et hus" },
      { name: "Regenerate Smash", damage: 28, flavor: "Slår mens den regenererer" },
    ],
  },
  {
    id: "UNICORN", name: "", img: "", description: "", color: "",
    hp: 85,
    attacks: [
      { name: "Horn Pierce",      damage: 26, flavor: "Hornet er skarpere enn noe sverd" },
      { name: "Glitter Stampede", damage: 18, flavor: "Glitter overalt — og hooves" },
    ],
  },
  {
    id: "VAMPIRE", name: "", img: "", description: "", color: "",
    hp: 90,
    attacks: [
      { name: "Blood Drain", damage: 24, flavor: "Suger livskreftene fra deg" },
      { name: "Bat Swarm",   damage: 18, flavor: "Tusenvis av flaggermus" },
    ],
  },
  {
    id: "WEREWOLF", name: "", img: "", description: "", color: "",
    hp: 100,
    attacks: [
      { name: "Feral Fury", damage: 28, flavor: "Fullmånens raseri" },
      { name: "Pack Howl",  damage: 18, flavor: "Kaller inn flokken" },
    ],
  },
  {
    id: "WYVERN", name: "", img: "", description: "", color: "",
    hp: 100,
    attacks: [
      { name: "Venom Fang",  damage: 24, flavor: "Giften er dødelig på sekunder" },
      { name: "Aerial Blade", damage: 22, flavor: "Vingen kutter som et sverd" },
    ],
  },
  {
    id: "YETI", name: "", img: "", description: "", color: "",
    hp: 110,
    attacks: [
      { name: "Blizzard Fist",   damage: 28, flavor: "Is og snø pakker seg rundt deg" },
      { name: "Avalanche Stomp", damage: 22, flavor: "Bakken rister, snøen faller" },
    ],
  },
  {
    id: "ZOMBIE", name: "", img: "", description: "", color: "",
    hp: 80,
    attacks: [
      { name: "Undead Bite",    damage: 20, flavor: "Infeksjon sprer seg øyeblikkelig" },
      { name: "Shamble Crush",  damage: 14, flavor: "Sakte men uunngåelig" },
    ],
  },

  // ── Obskure skapninger ────────────────────────────────────────────────────
  {
    // Orcadian/Norse: hudfri hestedemon med giftig pust. En av mytologiens mest grusomme skapninger.
    id: "NUCKELAVEE", name: "Nuckelavee", img: "./images/SHISHAN/nuckelavee.png", description: "Orcadisk hestedemon uten hud — pesten følger overalt den trer", color: "#3a0505",
    hp: 110,
    attacks: [
      { name: "Pestilent Breath", damage: 30, flavor: "Pesten sprer seg før du rekker å løpe" },
      { name: "Flayed Charge",    damage: 25, flavor: "Ingen hud, ingen grenser, ingen nåde" },
    ],
  },
  {
    // Japansk: et 15 meter høyt skjelett bygget av beinene til sultne krigere som døde uten begravelse.
    id: "GASHADOKURO", name: "Gashadokuro", img: "./images/SHISHAN/gashadokuro.png", description: "Et 15m skjelett av sultne krigsdøde — og det er sulten igjen", color: "#151515",
    hp: 140,
    attacks: [
      { name: "Bone Crunch",   damage: 35, flavor: "Bitt av et kjempeskjelett — og du hørtes ikke" },
      { name: "Death Rattle",  damage: 20, flavor: "Skranglelyden varsler intet godt" },
    ],
  },
  {
    // Japansk: edderkopp som forvandler seg til en vakker kvinne for å lokke menn i fellen.
    id: "JOROGUMO", name: "Jorogumo", img: "./images/SHISHAN/jorogumo.png", description: "Halvt vakker kvinne, halvt edderkopp — hundre prosent farlig", color: "#2a0a3a",
    hp: 85,
    attacks: [
      { name: "Web Trap",    damage: 20, flavor: "Ingen rømmer fra silkenettene" },
      { name: "Venom Kiss",  damage: 28, flavor: "Det siste du husker er smilet" },
    ],
  },
  {
    // Algonkin/Cree: et iskaldt kannibalvesen — mennesker som spiste mennesker ble forvandlet til dette.
    id: "WENDIGO", name: "Wendigo", img: "./images/SHISHAN/wendigo.png", description: "Isandedets kannibalånd — du hørte aldri den komme", color: "#0a1a2a",
    hp: 100,
    attacks: [
      { name: "Frostbite Claw", damage: 26, flavor: "Kulden setter seg i beina før slaget" },
      { name: "Hunger Howl",    damage: 20, flavor: "Alltid sulten — aldri fornøyd" },
    ],
  },
  {
    // Japansk: tapir-lignende vesen som spiser mareritt. Ber du det om hjelp, kan det ta litt mer enn meningen.
    id: "BAKU", name: "Baku", img: "./images/SHISHAN/baku.png", description: "Spiser mareritt til frokost — og sjelen din hvis du ber for høflig", color: "#2a1a3a",
    hp: 75,
    attacks: [
      { name: "Nightmare Feast", damage: 24, flavor: "Spiser drømmene dine — og litt av sjelen din" },
      { name: "Dream Crush",     damage: 18, flavor: "Virkeligheten er verre enn mareritten" },
    ],
  },
];
