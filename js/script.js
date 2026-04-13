//! IKKE RØR

const monsters = [
  "CERBERUS",
  "CHIMERA",
  "DRAGON",
  "FENRIR",
  "GRIFFIN",
  "KRAKEN",
  "MINOTAUR",
  "SHISHAN",
  "PHOENIX",
  "KITSUNE",
  "BASILISK",
  "BEHEMOTH",
  "CENTAUR",
  "CYCLOPS",
  "DJINN",
  "ELEMENTAL",
  "GARGOYLE",
  "GOLEM",
  "HARPY",
  "HYDRA",
  "LEVIATHAN",
  "LICH",
  "MANTICORE",
  "MEDUSA",
  "OGRE",
  "ORC",
  "PEGASUS",
  "SATYR",
  "SPHINX",
  "TROLL",
  "UNICORN",
  "VAMPIRE",
  "WEREWOLF",
  "WYVERN",
  "YETI",
  "ZOMBIE",
  "ANGEL",
  "DEMON",
  "DEVIL",
  "IMP",
];

const container = document.querySelector(".container");

monsters.map((monster) => {
  // Create the monster div
  const monsterDiv = document.createElement("div");
  monsterDiv.id = monster;

  // Create the card wrapper
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "cardwrapper";
  cardWrapper.id = `card${monster}`;

  // Create the title
  const title = document.createElement("h2");
  title.className = "cardTitle";
  title.id = `title${monster}`;
  title.textContent = "*";

  // Create the image
  const img = document.createElement("img");
  img.id = `img${monster}`;
  img.src = "";
  img.alt = "";

  // Create the text
  const text = document.createElement("p");
  text.className = "cardDescription";
  text.id = `text${monster}`;
  text.textContent = "*";

  // Append elements
  cardWrapper.appendChild(title);
  cardWrapper.appendChild(img);
  cardWrapper.appendChild(text);
  monsterDiv.appendChild(cardWrapper);
  container.appendChild(monsterDiv);

  // Load the script dynamically
  const script = document.createElement("script");
  script.src = `js/script${monster}.js`;
  script.defer = true;
  document.head.appendChild(script);
});
