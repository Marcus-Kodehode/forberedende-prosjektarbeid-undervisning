/* Ønsker du å bruke et eget bilde legges dette in i images/MANTICORENAVN/MANTICORENAVN.png. 
 Finnes det et bilde der allerede kan du bruke det i stedet om du ønsker. 
 Hvis ikke lager du nytt navn (f.eks Griffin2) */

const titleMANTICORE = "";
const imgMANTICOREUrl = "";
const textMANTICORE = "";
const cardColorMANTICORE = "";

if (titleMANTICORE && imgMANTICOREUrl && textMANTICORE && cardColorMANTICORE) {
  document.getElementById("titleMANTICORE").textContent = titleMANTICORE;
  document.getElementById("imgMANTICORE").src = imgMANTICOREUrl;
  document.getElementById("textMANTICORE").textContent = `"${textMANTICORE}!"`;
  document.getElementById("cardMANTICORE").style.backgroundColor =
    cardColorMANTICORE;
} else {
  document.getElementById("imgMANTICORE").src = "./images/archangel.png";
}