/* Ønsker du å bruke et eget bilde legges dette in i images/TROLLNAVN/TROLLNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleTROLL = "";
const imgTROLLUrl = "";
const textTROLL = "";
const cardColorTROLL = "";

if (titleTROLL && imgTROLLUrl && textTROLL && cardColorTROLL) {
  document.getElementById("titleTROLL").textContent = titleTROLL;
  document.getElementById("imgTROLL").src = imgTROLLUrl;
  document.getElementById("textTROLL").textContent = `"${textTROLL}!"`;
  document.getElementById("cardTROLL").style.backgroundColor =
    cardColorTROLL;
} else {
  document.getElementById("imgTROLL").src = "./images/archangel.png";
}