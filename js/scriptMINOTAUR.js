/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleMINOTAUR = "";
const imgMINOTAURUrl = "";
const textMINOTAUR = "";
const cardColorMINOTAUR = "";

if (titleMINOTAUR && imgMINOTAURUrl && textMINOTAUR && cardColorMINOTAUR) {
  document.getElementById("titleMINOTAUR").textContent = titleMINOTAUR;
  document.getElementById("imgMINOTAUR").src = imgMINOTAURUrl;
  document.getElementById("textMINOTAUR").textContent = `"${textMINOTAUR}!"`;
  document.getElementById("cardMINOTAUR").style.backgroundColor =
    cardColorMINOTAUR;
} else {
  document.getElementById("imgMINOTAUR").src = "./images/archangel.png";
}
