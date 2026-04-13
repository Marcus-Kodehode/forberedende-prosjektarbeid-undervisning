/* Ønsker du å bruke et eget bilde legges dette in i images/BEHEMOTHNAVN/BEHEMOTHNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleBEHEMOTH = "";
const imgBEHEMOTHUrl = "";
const textBEHEMOTH = "";
const cardColorBEHEMOTH = "";

if (titleBEHEMOTH && imgBEHEMOTHUrl && textBEHEMOTH && cardColorBEHEMOTH) {
  document.getElementById("titleBEHEMOTH").textContent = titleBEHEMOTH;
  document.getElementById("imgBEHEMOTH").src = imgBEHEMOTHUrl;
  document.getElementById("textBEHEMOTH").textContent = `"${textBEHEMOTH}!"`;
  document.getElementById("cardBEHEMOTH").style.backgroundColor =
    cardColorBEHEMOTH;
} else {
  document.getElementById("imgBEHEMOTH").src = "./images/archangel.png";
}
