/* Ønsker du å bruke et eget bilde legges dette in i images/MONSTERNAVN/MONSTERNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleCHIMERA = "";
const imgCHIMERAUrl = "";
const textCHIMERA = "";
const cardColorCHIMERA = "";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "./images/archangel.png";
}
