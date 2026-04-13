/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleFENRIR = "";
const imgFENRIRUrl = "";
const textFENRIR = "";
const cardColorFENRIR = "";

if (titleFENRIR && imgFENRIRUrl && textFENRIR && cardColorFENRIR) {
  document.getElementById("titleFENRIR").textContent = titleFENRIR;
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
  document.getElementById("textFENRIR").textContent = `"${textFENRIR}!"`;
  document.getElementById("cardFENRIR").style.backgroundColor = cardColorFENRIR;
} else {
  document.getElementById("imgFENRIR").src = "./images/archangel.png";
}
