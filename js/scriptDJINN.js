/* Ønsker du å bruke et eget bilde legges dette in i images/DJINNNAVN/DJINNNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleDJINN = "";
const imgDJINNUrl = "";
const textDJINN = "";
const cardColorDJINN = "";

if (titleDJINN && imgDJINNUrl && textDJINN && cardColorDJINN) {
  document.getElementById("titleDJINN").textContent = titleDJINN;
  document.getElementById("imgDJINN").src = imgDJINNUrl;
  document.getElementById("textDJINN").textContent = `"${textDJINN}!"`;
  document.getElementById("cardDJINN").style.backgroundColor =
    cardColorDJINN;
} else {
  document.getElementById("imgDJINN").src = "./images/archangel.png";
}