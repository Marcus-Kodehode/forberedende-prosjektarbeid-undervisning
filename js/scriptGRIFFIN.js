const titleGRIFFIN = "Griffin Boy";
const imgGRIFFINUrl = "/images/Griffin/Griffin.jpg";
const textGRIFFIN =
  "Your fate was sealed the moment I took flight, kneel... or be forgotten by the winds";
const cardColorGRIFFIN = "grey";

if (titleGRIFFIN && imgGRIFFINUrl && textGRIFFIN && cardColorGRIFFIN) {
  document.getElementById("titleGRIFFIN").textContent = titleGRIFFIN;
  document.getElementById("imgGRIFFIN").src = imgGRIFFINUrl;
  document.getElementById("textGRIFFIN").textContent = `"${textGRIFFIN}!"`;
  document.getElementById("cardGRIFFIN").style.backgroundColor =
    cardColorGRIFFIN;
} else {
  document.getElementById("imgGRIFFIN").src = "./images/archangel.png";
}
