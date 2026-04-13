/* Ønsker du å bruke et eget bilde legges dette in i images/HYDRANAVN/HYDRANAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleHYDRA = "";
const imgHYDRAUrl = "";
const textHYDRA = "";
const cardColorHYDRA = "";

if (titleHYDRA && imgHYDRAUrl && textHYDRA && cardColorHYDRA) {
  document.getElementById("titleHYDRA").textContent = titleHYDRA;
  document.getElementById("imgHYDRA").src = imgHYDRAUrl;
  document.getElementById("textHYDRA").textContent = `"${textHYDRA}!"`;
  document.getElementById("cardHYDRA").style.backgroundColor =
    cardColorHYDRA;
} else {
  document.getElementById("imgHYDRA").src = "./images/archangel.png";
}