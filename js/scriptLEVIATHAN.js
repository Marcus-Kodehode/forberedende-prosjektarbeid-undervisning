/* Ønsker du å bruke et eget bilde legges dette in i images/LEVIATHANNAVN/LEVIATHANNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleLEVIATHAN = "";
const imgLEVIATHANUrl = "";
const textLEVIATHAN = "";
const cardColorLEVIATHAN = "";

if (titleLEVIATHAN && imgLEVIATHANUrl && textLEVIATHAN && cardColorLEVIATHAN) {
  document.getElementById("titleLEVIATHAN").textContent = titleLEVIATHAN;
  document.getElementById("imgLEVIATHAN").src = imgLEVIATHANUrl;
  document.getElementById("textLEVIATHAN").textContent = `"${textLEVIATHAN}!"`;
  document.getElementById("cardLEVIATHAN").style.backgroundColor =
    cardColorLEVIATHAN;
} else {
  document.getElementById("imgLEVIATHAN").src = "./images/archangel.png";
}