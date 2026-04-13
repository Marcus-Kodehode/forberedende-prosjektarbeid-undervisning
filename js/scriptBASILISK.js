/* Ønsker du å bruke et eget bilde legges dette in i images/BASILISKNAVN/BASILISKNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleBASILISK = "";
const imgBASILISKUrl = "";
const textBASILISK = "";
const cardColorBASILISK = "";

if (titleBASILISK && imgBASILISKUrl && textBASILISK && cardColorBASILISK) {
  document.getElementById("titleBASILISK").textContent = titleBASILISK;
  document.getElementById("imgBASILISK").src = imgBASILISKUrl;
  document.getElementById("textBASILISK").textContent = `"${textBASILISK}!"`;
  document.getElementById("cardBASILISK").style.backgroundColor =
    cardColorBASILISK;
} else {
  document.getElementById("imgBASILISK").src = "./images/archangel.png";
}
