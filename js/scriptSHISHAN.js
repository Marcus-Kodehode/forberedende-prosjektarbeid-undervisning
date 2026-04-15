const titleSHISHAN = "Willow the master";
const imgSHISHANUrl = "/images/SHISHAN/Barberian.png";
const textSHISHAN =
  "I am the one and this length of text is ok to have, is that ok yo?";
const cardColorSHISHAN = "darkred";

if (titleSHISHAN && imgSHISHANUrl && textSHISHAN && cardColorSHISHAN) {
  document.getElementById("titleSHISHAN").textContent = titleSHISHAN;
  document.getElementById("imgSHISHAN").src = imgSHISHANUrl;
  document.getElementById("textSHISHAN").textContent = `"${textSHISHAN}!"`;
  document.getElementById("cardSHISHAN").style.backgroundColor =
    cardColorSHISHAN;
} else {
  document.getElementById("imgSHISHAN").src = "./images/archangel.png";
}
