const titlePHOENIX = "The Fire Phoenix";
const imgPHOENIXUrl = "./images/Phoenix.jpg";
const textPHOENIX = "Born from ashes, rising with eternal flames";
const cardColorPHOENIX = "darkred";

if (titlePHOENIX && imgPHOENIXUrl && textPHOENIX && cardColorPHOENIX) {
  document.getElementById("titlePHOENIX").textContent = titlePHOENIX;
  document.getElementById("imgPHOENIX").src = imgPHOENIXUrl;
  document.getElementById("textPHOENIX").textContent = `"${textPHOENIX}!"`;
  document.getElementById("cardPHOENIX").style.backgroundColor =
    cardColorPHOENIX;
} else {
  document.getElementById("imgPHOENIX").src = "./images/archangel.png";
}
