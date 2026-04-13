/* Ønsker du å bruke et eget bilde legges dette in i images/SATYRNAVN/SATYRNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleSATYR = "";
const imgSATYRUrl = "";
const textSATYR = "";
const cardColorSATYR = "";

if (titleSATYR && imgSATYRUrl && textSATYR && cardColorSATYR) {
  document.getElementById("titleSATYR").textContent = titleSATYR;
  document.getElementById("imgSATYR").src = imgSATYRUrl;
  document.getElementById("textSATYR").textContent = `"${textSATYR}!"`;
  document.getElementById("cardSATYR").style.backgroundColor =
    cardColorSATYR;
} else {
  document.getElementById("imgSATYR").src = "./images/archangel.png";
}