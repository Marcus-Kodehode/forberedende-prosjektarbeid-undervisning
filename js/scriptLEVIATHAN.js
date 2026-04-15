const titleLEVIATHAN = "Leviathan";
const imgLEVIATHANUrl = "/images/LEVIATHAN/Leviathan.png";
const textLEVIATHAN = "Ancient sea titan Leviathan crushes foes with tidal fury from the abyss";
const cardColorLEVIATHAN = "#1A2A6C";

if (titleLEVIATHAN && imgLEVIATHANUrl && textLEVIATHAN && cardColorLEVIATHAN) {
  document.getElementById("titleLEVIATHAN").textContent = titleLEVIATHAN;
  document.getElementById("imgLEVIATHAN").src = imgLEVIATHANUrl;
  document.getElementById("textLEVIATHAN").textContent = `"${textLEVIATHAN}!"`;
  document.getElementById("cardLEVIATHAN").style.backgroundColor =
    cardColorLEVIATHAN;
} else {
  document.getElementById("imgLEVIATHAN").src = "./images/archangel.png";
}