const titleLICH = "Ditch The Lich";
const imgLICHUrl = "/images/LICH/Lich2.png";
const textLICH = "From the school of running heroically away from danger";
const cardColorLICH = "Green";

if (titleLICH && imgLICHUrl && textLICH && cardColorLICH) {
  document.getElementById("titleLICH").textContent = titleLICH;
  document.getElementById("imgLICH").src = imgLICHUrl;
  document.getElementById("textLICH").textContent = `"${textLICH}!"`;
  document.getElementById("cardLICH").style.backgroundColor =
    cardColorLICH;
} else {
  document.getElementById("imgLICH").src = "./images/archangel.png";
}