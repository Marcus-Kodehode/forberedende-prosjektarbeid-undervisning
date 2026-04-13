/* Ønsker du å bruke et eget bilde legges dette in i images/GOLEMNAVN/GOLEMNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleGOLEM = "";
const imgGOLEMUrl = "";
const textGOLEM = "";
const cardColorGOLEM = "";

if (titleGOLEM && imgGOLEMUrl && textGOLEM && cardColorGOLEM) {
  document.getElementById("titleGOLEM").textContent = titleGOLEM;
  document.getElementById("imgGOLEM").src = imgGOLEMUrl;
  document.getElementById("textGOLEM").textContent = `"${textGOLEM}!"`;
  document.getElementById("cardGOLEM").style.backgroundColor =
    cardColorGOLEM;
} else {
  document.getElementById("imgGOLEM").src = "./images/archangel.png";
}