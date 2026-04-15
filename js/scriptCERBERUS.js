const titleCERBERUS = "Cerberus, Dreadhound";
const imgCERBERUSUrl = "images/CERBERUS/cerberus.png";
const textCERBERUS = "Three heads, one hunger; he stands as the final seal upon the gate of fire";
const cardColorCERBERUS = "#1a0505";

if (titleCERBERUS && imgCERBERUSUrl && textCERBERUS && cardColorCERBERUS) {
  document.getElementById("titleCERBERUS").textContent = titleCERBERUS;
  document.getElementById("imgCERBERUS").src = imgCERBERUSUrl;
  document.getElementById("textCERBERUS").textContent = `"${textCERBERUS}!"`;
  document.getElementById("cardCERBERUS").style.backgroundColor =
    cardColorCERBERUS;
} else {
  document.getElementById("imgCERBERUS").src = "../images/archangel.png";
}