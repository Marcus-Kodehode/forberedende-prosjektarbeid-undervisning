/* Ønsker du å bruke et eget bilde legges dette in i images/ZOMBIENAVN/ZOMBIENAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleZOMBIE = "";
const imgZOMBIEUrl = "";
const textZOMBIE = "";
const cardColorZOMBIE = "";

if (titleZOMBIE && imgZOMBIEUrl && textZOMBIE && cardColorZOMBIE) {
  document.getElementById("titleZOMBIE").textContent = titleZOMBIE;
  document.getElementById("imgZOMBIE").src = imgZOMBIEUrl;
  document.getElementById("textZOMBIE").textContent = `"${textZOMBIE}!"`;
  document.getElementById("cardZOMBIE").style.backgroundColor =
    cardColorZOMBIE;
} else {
  document.getElementById("imgZOMBIE").src = "./images/archangel.png";
}