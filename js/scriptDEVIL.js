/* Ønsker du å bruke et eget bilde legges dette in i images/DEVILNAVN/DEVILNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleDEVIL = "";
const imgDEVILUrl = "";
const textDEVIL = "";
const cardColorDEVIL = "";

if (titleDEVIL && imgDEVILUrl && textDEVIL && cardColorDEVIL) {
  document.getElementById("titleDEVIL").textContent = titleDEVIL;
  document.getElementById("imgDEVIL").src = imgDEVILUrl;
  document.getElementById("textDEVIL").textContent = `"${textDEVIL}!"`;
  document.getElementById("cardDEVIL").style.backgroundColor =
    cardColorDEVIL;
} else {
  document.getElementById("imgDEVIL").src = "./images/archangel.png";
}