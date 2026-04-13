/* Ønsker du å bruke et eget bilde legges dette in i images/ORCNAVN/ORCNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleORC = "";
const imgORCUrl = "";
const textORC = "";
const cardColorORC = "";

if (titleORC && imgORCUrl && textORC && cardColorORC) {
  document.getElementById("titleORC").textContent = titleORC;
  document.getElementById("imgORC").src = imgORCUrl;
  document.getElementById("textORC").textContent = `"${textORC}!"`;
  document.getElementById("cardORC").style.backgroundColor =
    cardColorORC;
} else {
  document.getElementById("imgORC").src = "./images/archangel.png";
}