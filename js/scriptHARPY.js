const titleHARPY = "Harpy Queen";
const imgHARPYUrl = "/images/Harpy/HarpyQueen.png";
const textHARPY = "Merciless wrath that devours all who dare rise beneath her shadow...";
const cardColorHARPY = "#8A0303";

if (titleHARPY && imgHARPYUrl && textHARPY && cardColorHARPY) {
  document.getElementById("titleHARPY").textContent = titleHARPY;
  document.getElementById("imgHARPY").src = imgHARPYUrl;
  document.getElementById("textHARPY").textContent = `"${textHARPY}!"`;
  document.getElementById("cardHARPY").style.backgroundColor =
    cardColorHARPY;
} else {
  document.getElementById("imgHARPY").src = "./images/archangel.png";
}