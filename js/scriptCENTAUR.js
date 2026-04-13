/* Ønsker du å bruke et eget bilde legges dette in i images/CENTAURNAVN/CENTAURNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleCENTAUR = "";
const imgCENTAURUrl = "";
const textCENTAUR = "";
const cardColorCENTAUR = "";

if (titleCENTAUR && imgCENTAURUrl && textCENTAUR && cardColorCENTAUR) {
  document.getElementById("titleCENTAUR").textContent = titleCENTAUR;
  document.getElementById("imgCENTAUR").src = imgCENTAURUrl;
  document.getElementById("textCENTAUR").textContent = `"${textCENTAUR}!"`;
  document.getElementById("cardCENTAUR").style.backgroundColor =
    cardColorCENTAUR;
} else {
  document.getElementById("imgCENTAUR").src = "./images/archangel.png";
}
