const titleMANTICORE = "Master";
const imgMANTICOREUrl = "images/MANTICORE/manticore.png";
const textMANTICORE = "When everyone falls… I remain.";
const cardColorMANTICORE = "darkred";

if (titleMANTICORE && imgMANTICOREUrl && textMANTICORE && cardColorMANTICORE) {
  document.getElementById("titleMANTICORE").textContent = titleMANTICORE;
  document.getElementById("imgMANTICORE").src = imgMANTICOREUrl;
  document.getElementById("textMANTICORE").textContent = `"${textMANTICORE}!"`;
  document.getElementById("cardMANTICORE").style.backgroundColor =
    cardColorMANTICORE;
} else {
  document.getElementById("imgMANTICORE").src = "./images/archangel.png";
}