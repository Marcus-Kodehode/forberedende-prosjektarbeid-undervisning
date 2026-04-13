/* Ønsker du å bruke et eget bilde legges dette in i images/ELEMENTALNAVN/ELEMENTALNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleELEMENTAL = "";
const imgELEMENTALUrl = "";
const textELEMENTAL = "";
const cardColorELEMENTAL = "";

if (titleELEMENTAL && imgELEMENTALUrl && textELEMENTAL && cardColorELEMENTAL) {
  document.getElementById("titleELEMENTAL").textContent = titleELEMENTAL;
  document.getElementById("imgELEMENTAL").src = imgELEMENTALUrl;
  document.getElementById("textELEMENTAL").textContent = `"${textELEMENTAL}!"`;
  document.getElementById("cardELEMENTAL").style.backgroundColor =
    cardColorELEMENTAL;
} else {
  document.getElementById("imgELEMENTAL").src = "./images/archangel.png";
}