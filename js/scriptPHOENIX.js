/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titlePHOENIX = "";
const imgPHOENIXUrl = "";
const textPHOENIX = "";
const cardColorPHOENIX = "";

if (titlePHOENIX && imgPHOENIXUrl && textPHOENIX && cardColorPHOENIX) {
  document.getElementById("titlePHOENIX").textContent = titlePHOENIX;
  document.getElementById("imgPHOENIX").src = imgPHOENIXUrl;
  document.getElementById("textPHOENIX").textContent = `"${textPHOENIX}!"`;
  document.getElementById("cardPHOENIX").style.backgroundColor =
    cardColorPHOENIX;
} else {
  document.getElementById("imgPHOENIX").src = "./images/archangel.png";
}
