/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleKITSUNE = "";
const imgKITSUNEUrl = "";
const textKITSUNE = "";
const cardColorKITSUNE = "";

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  document.getElementById("cardKITSUNE").style.backgroundColor =
    cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = "./images/archangel.png";
}
