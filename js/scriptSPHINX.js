/* Ønsker du å bruke et eget bilde legges dette in i images/SPHINXNAVN/SPHINXNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleSPHINX = "";
const imgSPHINXUrl = "";
const textSPHINX = "";
const cardColorSPHINX = "";

if (titleSPHINX && imgSPHINXUrl && textSPHINX && cardColorSPHINX) {
  document.getElementById("titleSPHINX").textContent = titleSPHINX;
  document.getElementById("imgSPHINX").src = imgSPHINXUrl;
  document.getElementById("textSPHINX").textContent = `"${textSPHINX}!"`;
  document.getElementById("cardSPHINX").style.backgroundColor =
    cardColorSPHINX;
} else {
  document.getElementById("imgSPHINX").src = "./images/archangel.png";
}