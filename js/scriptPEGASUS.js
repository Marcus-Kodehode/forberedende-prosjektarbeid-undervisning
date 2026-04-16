const titlePEGASUS = "PEGASUS";
const imgPEGASUrl = "images/Pegasus/Pegasus.png"; 
const videoPEGASUSUrl = "images/PegasusVid/generated_video.mp4"; 
const textPEGASUS = "Hercules who? I am the mighty Pegasus, the winged horse of your nightmares";
const cardColorPEGASUS = "darkblue";


const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Creepster&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);


const cardContainer = document.getElementById("cardPEGASUS");
const cardImg = document.getElementById("imgPEGASUS");

if (cardImg) {
    cardImg.src = imgPEGASUrl;
    document.getElementById("titlePEGASUS").textContent = titlePEGASUS;
    document.getElementById("textPEGASUS").textContent = `"${textPEGASUS}!"`;
    cardContainer.style.backgroundColor = cardColorPEGASUS;
}


const cardVideo = document.createElement("video");
cardVideo.id = "videoPEGASUS";
cardVideo.src = videoPEGASUSUrl;
cardVideo.loop = true;
cardVideo.muted = true; 
cardVideo.playsInline = true;
cardVideo.preload = "auto"; 
cardVideo.style.display = "none";
cardVideo.style.width = "100%";
cardVideo.style.height = "auto";
cardVideo.style.position = "relative";
cardVideo.style.zIndex = "5"; 
cardImg.after(cardVideo);


const stylePEGASUS = document.createElement("style");
stylePEGASUS.textContent = `
  #cardPEGASUS {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #000;
  }

  
  #cardPEGASUS:hover, #cardPEGASUS.active {
    animation: hellFireGlow 1.5s infinite alternate;
  }

  @keyframes hellFireGlow {
    0% { box-shadow: 0 0 20px #8A0303, 0 0 40px #ff4500; }
    100% { box-shadow: 0 0 40px #ff8c00, 0 0 80px #ff0000; }
  }

  #cardPEGASUS.active {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px; 
    height: auto;
    max-height: 98vh;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  
  #cardPEGASUS.active h2 {
    position: absolute;
    top: 15px;
    width: 100%;
    text-align: center;
    z-index: 100;
    font-family: 'Creepster', cursive;
    font-size: 4.5em;
    color: #4a0000; 
    text-shadow: -2px -2px 0 #000, 2px 2px 0 #000, 0 0 20px #ff0000;
    animation: pulseHorror 2s ease-in-out infinite alternate;
  }

  
  #cardPEGASUS.active p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 100;
    font-family: 'Creepster', cursive;
    font-size: 1.8em;
    padding: 60px 20px 30px;
    color: #5e0000;
    text-shadow: -1px -1px 0 #000, 1px 1px 0 #000, 0 0 10px #ff0000;
    background: linear-gradient(to top, rgba(0,0,0,1) 40%, transparent);
  }

  @keyframes pulseHorror {
    from { transform: scale(1); filter: brightness(1); }
    to { transform: scale(1.03); filter: brightness(1.3); }
  }

 
  #cardPEGASUS::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 210; 
    opacity: 0;
    background-image: radial-gradient(circle, #8A0303 40%, transparent 60%), linear-gradient(180deg, transparent, #8A0303);
    background-size: 20px 20px, 6px 400px;
    background-repeat: no-repeat;
  }

 
  #cardPEGASUS::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 200;
    opacity: 0;
    background-image: radial-gradient(circle, #ff4500 30%, transparent 50%), radial-gradient(circle, #ff8c00 20%, transparent 40%);
    background-size: 12px 12px, 18px 18px;
    background-repeat: no-repeat;
  }

  #cardPEGASUS:hover::after, #cardPEGASUS.active::after,
  #cardPEGASUS:hover::before, #cardPEGASUS.active::before { opacity: 1; }

  #cardPEGASUS:hover::after, #cardPEGASUS.active::after { animation: rainBlood 1.1s linear infinite; }
  #cardPEGASUS:hover::before, #cardPEGASUS.active::before { animation: fireEmbers 0.8s linear infinite; }

  @keyframes rainBlood {
    0% { background-position: 15% -200px, 45% -150px, 85% -300px; }
    100% { background-position: 15% 1300px, 45% 1400px, 85% 1100px; }
  }

  @keyframes fireEmbers {
    0% { background-position: 25% 1000px, 75% 1000px; opacity: 0.8; }
    100% { background-position: 30% -100px, 70% -100px; opacity: 0; }
  }

  .pegasus-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.98);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
    z-index: 9998;
  }
  .pegasus-overlay.show { opacity: 1; visibility: visible; }
`;
document.head.appendChild(stylePEGASUS);


const overlay = document.createElement("div");
overlay.className = "pegasus-overlay";
document.body.appendChild(overlay);

cardContainer.onclick = (e) => {
    e.stopPropagation();
    const isActive = cardContainer.classList.toggle("active");
    overlay.classList.toggle("show");
    
    if (isActive) {
        cardVideo.style.display = "block";
        cardImg.style.display = "none";
        cardVideo.play().catch(err => console.error("Video failed:", err));
    } else {
        cardVideo.style.display = "none";
        cardImg.style.display = "block";
        cardVideo.pause();
        cardVideo.currentTime = 0;
    }
};

overlay.onclick = () => {
    cardContainer.classList.remove("active");
    overlay.classList.remove("show");
    cardVideo.style.display = "none";
    cardImg.style.display = "block";
    cardVideo.pause();
    cardVideo.currentTime = 0;
};