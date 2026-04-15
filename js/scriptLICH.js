const titleLICH = "Ditch The Lich";
const imgLICHUrl = "/images/LICH/pngegg.png";
const textLICH = "";
const cardColorLICH = "";

if (titleLICH && imgLICHUrl && textLICH && cardColorLICH) {
  document.getElementById("titleLICH").textContent = titleLICH;
  document.getElementById("imgLICH").src = imgLICHUrl;
  document.getElementById("textLICH").textContent = `"${textLICH}!"`;
  document.getElementById("cardLICH").style.backgroundColor =
    cardColorLICH;
} else {
  document.getElementById("imgLICH").src = "./images/archangel.png";
}