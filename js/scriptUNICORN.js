/* Ønsker du å bruke et eget bilde legges dette in i images/UNICORNNAVN/UNICORNNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleUNICORN = "";
const imgUNICORNUrl = "";
const textUNICORN = "";
const cardColorUNICORN = "";

if (titleUNICORN && imgUNICORNUrl && textUNICORN && cardColorUNICORN) {
  document.getElementById("titleUNICORN").textContent = titleUNICORN;
  document.getElementById("imgUNICORN").src = imgUNICORNUrl;
  document.getElementById("textUNICORN").textContent = `"${textUNICORN}!"`;
  document.getElementById("cardUNICORN").style.backgroundColor =
    cardColorUNICORN;
} else {
  document.getElementById("imgUNICORN").src = "./images/archangel.png";
}