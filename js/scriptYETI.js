/* Ønsker du å bruke et eget bilde legges dette in i images/YETINAVN/YETINAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleYETI = "";
const imgYETIUrl = "";
const textYETI = "";
const cardColorYETI = "";

if (titleYETI && imgYETIUrl && textYETI && cardColorYETI) {
  document.getElementById("titleYETI").textContent = titleYETI;
  document.getElementById("imgYETI").src = imgYETIUrl;
  document.getElementById("textYETI").textContent = `"${textYETI}!"`;
  document.getElementById("cardYETI").style.backgroundColor =
    cardColorYETI;
} else {
  document.getElementById("imgYETI").src = "./images/archangel.png";
}