const titleFENRIR = "Fenrir";
const imgFENRIRUrl = "../images/FENRIR/fenrir.jpg";
const textFENRIR = "I like munchin' on hands... don't you dare click me";
const cardColorFENRIR = "#2e3372";
const urlFENRIR = "https://www.youtube.com/shorts/X3cuzenKdig";

if (titleFENRIR && imgFENRIRUrl && textFENRIR && cardColorFENRIR) {
  document.getElementById("titleFENRIR").textContent = titleFENRIR;
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
  document.getElementById("textFENRIR").textContent = `"${textFENRIR}!"`;
  document.getElementById("cardFENRIR").style.backgroundColor = cardColorFENRIR;
} else {
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
}

document.getElementById("cardFENRIR").addEventListener("click", () => {
  window.location.href = urlFENRIR;
});

document.getElementById("cardFENRIR").style.cursor = "pointer";
