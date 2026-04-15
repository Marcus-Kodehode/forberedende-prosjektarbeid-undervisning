const titleKRAKEN = "Kraken";
const imgKRAKENUrl = "/images/KRAKEN/kraken.png"
const textKRAKEN = "The sea isn’t your escape… it’s my domain. Every wave carries your end closer";
const cardColorKRAKEN = "darkblue";

if (titleKRAKEN && imgKRAKENUrl && textKRAKEN && cardColorKRAKEN) {
  document.getElementById("titleKRAKEN").textContent = titleKRAKEN;
  document.getElementById("imgKRAKEN").src = imgKRAKENUrl;
  document.getElementById("textKRAKEN").textContent = `"${textKRAKEN}!"`;
  document.getElementById("cardKRAKEN").style.backgroundColor = cardColorKRAKEN;
} else {
  document.getElementById("imgKRAKEN").src = "./images/archangel.png";
}
