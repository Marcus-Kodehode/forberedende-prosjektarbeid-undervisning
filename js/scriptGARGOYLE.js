/* Ønsker du å bruke et eget bilde legges dette in i images/GARGOYLENAVN/GARGOYLENAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleGARGOYLE = "";
const imgGARGOYLEUrl = "";
const textGARGOYLE = "";
const cardColorGARGOYLE = "";

if (titleGARGOYLE && imgGARGOYLEUrl && textGARGOYLE && cardColorGARGOYLE) {
  document.getElementById("titleGARGOYLE").textContent = titleGARGOYLE;
  document.getElementById("imgGARGOYLE").src = imgGARGOYLEUrl;
  document.getElementById("textGARGOYLE").textContent = `"${textGARGOYLE}!"`;
  document.getElementById("cardGARGOYLE").style.backgroundColor =
    cardColorGARGOYLE;
} else {
  document.getElementById("imgGARGOYLE").src = "./images/archangel.png";
}