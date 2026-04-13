/* Ønsker du å bruke et eget bilde legges dette in i images/DEMONNAVN/DEMONNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleDEMON = "";
const imgDEMONUrl = "";
const textDEMON = "";
const cardColorDEMON = "";

if (titleDEMON && imgDEMONUrl && textDEMON && cardColorDEMON) {
  document.getElementById("titleDEMON").textContent = titleDEMON;
  document.getElementById("imgDEMON").src = imgDEMONUrl;
  document.getElementById("textDEMON").textContent = `"${textDEMON}!"`;
  document.getElementById("cardDEMON").style.backgroundColor =
    cardColorDEMON;
} else {
  document.getElementById("imgDEMON").src = "./images/archangel.png";
}