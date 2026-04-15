const titleMEDUSA = "Medusa";
const imgMEDUSAUrl = "images/MEDUSA/medusa.png";
const textMEDUSA = "A mythical Gorgon from Greek mythology with snakes for hair, whose gaze turns people to stone.";
const cardColorMEDUSA = "#8B0000";

if (titleMEDUSA && imgMEDUSAUrl && textMEDUSA && cardColorMEDUSA) {
  document.getElementById("titleMEDUSA").textContent = titleMEDUSA;
  document.getElementById("imgMEDUSA").src = imgMEDUSAUrl;
  document.getElementById("textMEDUSA").textContent = `"${textMEDUSA}!"`;
  document.getElementById("cardMEDUSA").style.backgroundColor =
    cardColorMEDUSA;
} else {
  document.getElementById("imgMEDUSA").src = "./images/archangel.png";
}
// const titleMEDUSA = "Medusa";
// const imgMEDUSAUrl = "images/Medusa/Medusa.png";
// const textMEDUSA = "A mythical Gorgon from Greek mythology with snakes for hair, whose gaze turns people to stone.";
// const cardColorMEDUSA = "#8B0000";