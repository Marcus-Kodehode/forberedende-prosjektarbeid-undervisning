const titleGARGOYLE = "Gargle, the Watcher";
const imgGARGOYLEUrl = "/images/GARGOYLE/gargoyle.jpg";
const textGARGOYLE = "By day, cold stone. By night, hunger. Sleep well";
const cardColorGARGOYLE = "darkslategray";

if (titleGARGOYLE && imgGARGOYLEUrl && textGARGOYLE && cardColorGARGOYLE) {
  document.getElementById("titleGARGOYLE").textContent = titleGARGOYLE;
  document.getElementById("imgGARGOYLE").src = imgGARGOYLEUrl;
  document.getElementById("textGARGOYLE").textContent = `"${textGARGOYLE}!"`;
  document.getElementById("cardGARGOYLE").style.backgroundColor =
    cardColorGARGOYLE;
} else {
  document.getElementById("imgGARGOYLE").src = "./images/archangel.png";
}
