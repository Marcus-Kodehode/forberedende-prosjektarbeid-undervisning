/* Ønsker du å bruke et eget bilde legges dette in i images/WEREWOLFNAVN/WEREWOLFNAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleWEREWOLF = "";
const imgWEREWOLFUrl = "";
const textWEREWOLF = "";
const cardColorWEREWOLF = "";

if (titleWEREWOLF && imgWEREWOLFUrl && textWEREWOLF && cardColorWEREWOLF) {
  document.getElementById("titleWEREWOLF").textContent = titleWEREWOLF;
  document.getElementById("imgWEREWOLF").src = imgWEREWOLFUrl;
  document.getElementById("textWEREWOLF").textContent = `"${textWEREWOLF}!"`;
  document.getElementById("cardWEREWOLF").style.backgroundColor =
    cardColorWEREWOLF;
} else {
  document.getElementById("imgWEREWOLF").src = "./images/archangel.png";
}