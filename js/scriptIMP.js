/* Ønsker du å bruke et eget bilde legges dette in i images/IMP/IMP.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleIMP = "";
const imgIMPUrl = "";
const textIMP = "";
const cardColorIMP = "";

if (titleIMP && imgIMPUrl && textIMP && cardColorIMP) {
  document.getElementById("titleIMP").textContent = titleIMP;
  document.getElementById("imgIMP").src = imgIMPUrl;
  document.getElementById("textIMP").textContent = `"${textIMP}!"`;
  document.getElementById("cardIMP").style.backgroundColor = cardColorIMP;
} else {
  document.getElementById("imgIMP").src = "./images/archangel.png";
}
