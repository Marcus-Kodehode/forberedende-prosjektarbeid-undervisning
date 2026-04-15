const titleHARPY = "";
const imgHARPYUrl = "";
const textHARPY = "";
const cardColorHARPY = "";

if (titleHARPY && imgHARPYUrl && textHARPY && cardColorHARPY) {
  document.getElementById("titleHARPY").textContent = titleHARPY;
  document.getElementById("imgHARPY").src = imgHARPYUrl;
  document.getElementById("textHARPY").textContent = `"${textHARPY}!"`;
  document.getElementById("cardHARPY").style.backgroundColor =
    cardColorHARPY;
} else {
  document.getElementById("imgHARPY").src = "./images/archangel.png";
}