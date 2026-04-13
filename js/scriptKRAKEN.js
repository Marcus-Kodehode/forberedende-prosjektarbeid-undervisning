/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleKRAKEN = "";
const imgKRAKENUrl = "";
const textKRAKEN = "";
const cardColorKRAKEN = "";

if (titleKRAKEN && imgKRAKENUrl && textKRAKEN && cardColorKRAKEN) {
  document.getElementById("titleKRAKEN").textContent = titleKRAKEN;
  document.getElementById("imgKRAKEN").src = imgKRAKENUrl;
  document.getElementById("textKRAKEN").textContent = `"${textKRAKEN}!"`;
  document.getElementById("cardKRAKEN").style.backgroundColor = cardColorKRAKEN;
} else {
  document.getElementById("imgKRAKEN").src = "./images/archangel.png";
}
