const titleKITSUNE = "Nocturne Kitsune";
const imgKITSUNEUrl = "./images/KITSUNE/kitsune.png";
const textKITSUNE = "Rawr Stay away";
const cardColorKITSUNE = "#0d265a";

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  document.getElementById("cardKITSUNE").style.backgroundColor =
    cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
}
