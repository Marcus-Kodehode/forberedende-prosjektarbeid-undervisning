/* Ønsker du å bruke et eget bilde legges dette in i images/OGRENAVN/OGRENAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleOGRE = "";
const imgOGREUrl = "";
const textOGRE = "";
const cardColorOGRE = "";

if (titleOGRE && imgOGREUrl && textOGRE && cardColorOGRE) {
  document.getElementById("titleOGRE").textContent = titleOGRE;
  document.getElementById("imgOGRE").src = imgOGREUrl;
  document.getElementById("textOGRE").textContent = `"${textOGRE}!"`;
  document.getElementById("cardOGRE").style.backgroundColor =
    cardColorOGRE;
} else {
  document.getElementById("imgOGRE").src = "./images/archangel.png";
}