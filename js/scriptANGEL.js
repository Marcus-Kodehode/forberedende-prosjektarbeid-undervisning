/* Ønsker du å bruke et eget bilde legges dette in i images/ANGELNAVN/ANGELNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleANGEL = "";
const imgANGELUrl = "";
const textANGEL = "";
const cardColorANGEL = "";

if (titleANGEL && imgANGELUrl && textANGEL && cardColorANGEL) {
  document.getElementById("titleANGEL").textContent = titleANGEL;
  document.getElementById("imgANGEL").src = imgANGELUrl;
  document.getElementById("textANGEL").textContent = `"${textANGEL}!"`;
  document.getElementById("cardANGEL").style.backgroundColor = cardColorANGEL;
} else {
  document.getElementById("imgANGEL").src = "../images/archangel.png";
}
