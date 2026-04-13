/* Ønsker du å bruke et eget bilde legges dette in i images/WYVERNNAVN/WYVERNNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleWYVERN = "";
const imgWYVERNUrl = "";
const textWYVERN = "";
const cardColorWYVERN = "";

if (titleWYVERN && imgWYVERNUrl && textWYVERN && cardColorWYVERN) {
  document.getElementById("titleWYVERN").textContent = titleWYVERN;
  document.getElementById("imgWYVERN").src = imgWYVERNUrl;
  document.getElementById("textWYVERN").textContent = `"${textWYVERN}!"`;
  document.getElementById("cardWYVERN").style.backgroundColor =
    cardColorWYVERN;
} else {
  document.getElementById("imgWYVERN").src = "./images/archangel.png";
}