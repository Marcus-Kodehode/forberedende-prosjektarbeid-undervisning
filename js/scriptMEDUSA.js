/* Ønsker du å bruke et eget bilde legges dette in i images/MEDUSANAVN/MEDUSANAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleMEDUSA = "";
const imgMEDUSAUrl = "";
const textMEDUSA = "";
const cardColorMEDUSA = "";

if (titleMEDUSA && imgMEDUSAUrl && textMEDUSA && cardColorMEDUSA) {
  document.getElementById("titleMEDUSA").textContent = titleMEDUSA;
  document.getElementById("imgMEDUSA").src = imgMEDUSAUrl;
  document.getElementById("textMEDUSA").textContent = `"${textMEDUSA}!"`;
  document.getElementById("cardMEDUSA").style.backgroundColor =
    cardColorMEDUSA;
} else {
  document.getElementById("imgMEDUSA").src = "./images/archangel.png";
}