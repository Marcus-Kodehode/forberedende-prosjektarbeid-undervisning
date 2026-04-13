/* Ønsker du å bruke et eget bilde legges dette in i images/LICHNAVN/LICHNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleLICH = "";
const imgLICHUrl = "";
const textLICH = "";
const cardColorLICH = "";

if (titleLICH && imgLICHUrl && textLICH && cardColorLICH) {
  document.getElementById("titleLICH").textContent = titleLICH;
  document.getElementById("imgLICH").src = imgLICHUrl;
  document.getElementById("textLICH").textContent = `"${textLICH}!"`;
  document.getElementById("cardLICH").style.backgroundColor =
    cardColorLICH;
} else {
  document.getElementById("imgLICH").src = "./images/archangel.png";
}