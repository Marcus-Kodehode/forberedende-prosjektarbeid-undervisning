/* Ønsker du å bruke et eget bilde legges dette in i images/HARPYNAVN/HARPYNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleHARPY = "";
const imgHARPYUrl = "";
const textHARPY = "";
const cardColorHARPY = "";

if (titleHARPY && imgHARPYUrl && textHARPY && cardColorHARPY) {
  document.getElementById("titleHARPY").textContent = titleHARPY;
  document.getElementById("imgHARPY").src = imgHARPYUrl;
  document.getElementById("textHARPY").textContent = `"${textHARPY}!"`;
  document.getElementById("cardHARPY").style.backgroundColor =
    cardColorHARPY;
} else {
  document.getElementById("imgHARPY").src = "./images/archangel.png";
}