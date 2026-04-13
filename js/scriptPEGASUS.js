/* Ønsker du å bruke et eget bilde legges dette in i images/PEGASUSNAVN/PEGASUSNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titlePEGASUS = "";
const imgPEGASUSUrl = "";
const textPEGASUS = "";
const cardColorPEGASUS = "";

if (titlePEGASUS && imgPEGASUSUrl && textPEGASUS && cardColorPEGASUS) {
  document.getElementById("titlePEGASUS").textContent = titlePEGASUS;
  document.getElementById("imgPEGASUS").src = imgPEGASUSUrl;
  document.getElementById("textPEGASUS").textContent = `"${textPEGASUS}!"`;
  document.getElementById("cardPEGASUS").style.backgroundColor =
    cardColorPEGASUS;
} else {
  document.getElementById("imgPEGASUS").src = "./images/archangel.png";
}