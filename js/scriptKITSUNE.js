const titleKITSUNE = "Nocturne Kitsune";
const imgKITSUNEUrl = "./images/KITSUNE/kitsune.png";
const textKITSUNE = "Rawr Stay away";
const cardColorKITSUNE = "#0d265a";

const cardKITSUNE = document.getElementById("cardKITSUNE");

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  cardKITSUNE.style.backgroundColor = cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
}

// Add styles for hover and fullscreen effects
const style = document.createElement("style");
style.textContent = `
  #cardKITSUNE {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  #cardKITSUNE:hover {
    transform: scale(1.1) rotate(2deg);
    box-shadow: 0 0 30px rgba(0, 150, 255, 0.8), 0 0 60px rgba(0, 150, 255, 0.4);
    z-index: 10;
  }

  #cardKITSUNE.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #0d265a 0%, #000 100%) !important;
    animation: kitsuneAscend 1s ease-out forwards, kitsuneMagic 3s infinite alternate ease-in-out 1s;
  }

  #cardKITSUNE.fullscreen img {
    height: 60vh;
    width: auto;
    filter: drop-shadow(0 0 20px #00f);
  }

  #cardKITSUNE.fullscreen .cardTitle {
    font-size: 4rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 10px #00f, 0 0 20px #00f;
  }

  #cardKITSUNE.fullscreen .cardDescription {
    font-size: 2rem;
    margin-top: 2rem;
  }

  @keyframes kitsuneAscend {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes kitsuneMagic {
    0% { filter: hue-rotate(0deg) brightness(1); transform: scale(1); }
    50% { filter: hue-rotate(180deg) brightness(1.5); transform: scale(1.05); }
    100% { filter: hue-rotate(360deg) brightness(1); transform: scale(1); }
  }

  /* Particle-like effect overlay when fullscreen */
  #cardKITSUNE.fullscreen::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: radial-gradient(circle, #fff 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.2;
    animation: snow 10s linear infinite;
    pointer-events: none;
  }

  @keyframes snow {
    from { background-position: 0 0; }
    to { background-position: 500px 1000px; }
  }
`;
document.head.appendChild(style);

// Toggle fullscreen on click
cardKITSUNE.addEventListener("click", () => {
  cardKITSUNE.classList.toggle("fullscreen");
});
