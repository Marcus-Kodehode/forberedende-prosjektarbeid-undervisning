const titleFENRIR = "Awooolf";
const imgFENRIRUrl = "../images/FENRIR/fenrir.jpg";
const textFENRIR = "I like munchin' on hands... don't you dare click me";
const cardColorFENRIR = "#2e3372";
const urlFENRIR = "https://www.youtube.com/shorts/X3cuzenKdig";

if (titleFENRIR && imgFENRIRUrl && textFENRIR && cardColorFENRIR) {
  document.getElementById("titleFENRIR").textContent = titleFENRIR;
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
  document.getElementById("textFENRIR").textContent = textFENRIR;
  document.getElementById("cardFENRIR").style.backgroundColor = cardColorFENRIR;
} else {
  document.getElementById("imgFENRIR").src = imgFENRIRUrl;
}

const backdrop = document.createElement('div')
  backdrop.style.cssText = `
    display:none; position:fixed; inset:0;
    background:rgba(0,0,0,0.8); z-index:1000;
    align-items:center; justify-content:center;
    ` 

 const frame = document.createElement('iframe')
  frame.width = '400'
  frame.height = '711'
  frame.style.cssText = 'max-width:90vw; border:none; display:block;'
  frame.allow = 'autolplay; encrypted-media'
  frame.allowFullscreen = true

 const wrapper = document.createElement('div')
  wrapper.style.cssText = 'position:relative; width:400px; max-width:90vw;'
  wrapper.appendChild(frame)
  backdrop.appendChild(wrapper)
  document.body.appendChild(backdrop)

function closeModal() {
  backdrop.style.display = 'none'
  frame.src = ''
}

backdrop.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})

const card = document.getElementById('cardFENRIR')
  card.style.cursor = 'pointer'
  card.addEventListener('click', () => {
  const videoId = urlFENRIR.split("/shorts/")[1];
  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  backdrop.style.display = "flex";
  })

card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

card.addEventListener('mouseenter', () => {
  card.style.transform = 'scale(1.02)';
  card.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 255, 255, 0.08)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'scale(1)';
  card.style.boxShadow = 'none';
});
