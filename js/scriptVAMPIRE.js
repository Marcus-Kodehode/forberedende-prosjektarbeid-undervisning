/* Ønsker du å bruke et eget bilde legges dette in i images/VAMPIRENAVN/VAMPIRENAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleVAMPIRE = "";
const imgVAMPIREUrl = "";
const textVAMPIRE = "";
const cardColorVAMPIRE = "";

if (titleVAMPIRE && imgVAMPIREUrl && textVAMPIRE && cardColorVAMPIRE) {
  document.getElementById("titleVAMPIRE").textContent = titleVAMPIRE;
  document.getElementById("imgVAMPIRE").src = imgVAMPIREUrl;
  document.getElementById("textVAMPIRE").textContent = `"${textVAMPIRE}!"`;
  document.getElementById("cardVAMPIRE").style.backgroundColor =
    cardColorVAMPIRE;
} else {
  document.getElementById("imgVAMPIRE").src = "./images/archangel.png";
}