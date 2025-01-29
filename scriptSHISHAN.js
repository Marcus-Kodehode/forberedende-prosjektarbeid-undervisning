//! Denne filen er for læreren!

const titleSHISHAN = "Willow the master of all things code";
const imgSHISHANUrl = "./images/SHISHAN/barberian.png";
const textSHISHAN = "I am the one and only";
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

// const titleSHISHAN = "Willow the master of all things code";
// const imgSHISHANUrl = "/images/SHISHAN/Barberian.png";
// const textSHISHAN = "I am the one and only";
// const cardColorSHISHAN = "darkred";
