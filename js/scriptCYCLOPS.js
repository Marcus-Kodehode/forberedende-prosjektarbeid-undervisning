/* Ønsker du å bruke et eget bilde legges dette in i images/CYCLOPSNAVN/CYCLOPSNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleCYCLOPS = "";
const imgCYCLOPSUrl = "";
const textCYCLOPS = "";
const cardColorCYCLOPS = "";

if (titleCYCLOPS && imgCYCLOPSUrl && textCYCLOPS && cardColorCYCLOPS) {
  document.getElementById("titleCYCLOPS").textContent = titleCYCLOPS;
  document.getElementById("imgCYCLOPS").src = imgCYCLOPSUrl;
  document.getElementById("textCYCLOPS").textContent = `"${textCYCLOPS}!"`;
  document.getElementById("cardCYCLOPS").style.backgroundColor =
    cardColorCYCLOPS;
} else {
  document.getElementById("imgCYCLOPS").src = "./images/archangel.png";
}