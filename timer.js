document.addEventListener("DOMContentLoaded", () => {
  // 1. Recuperar datos
  const userName   = localStorage.getItem("userName")   || "Koala";
  const focusMins  = parseInt(localStorage.getItem("focusMins"),10) || 25;
  const categories = JSON.parse(localStorage.getItem("categories") || "[]");

  // 2. Elementos del DOM
  const nameSpan    = document.getElementById("nombre-usuario");
  const startBtn    = document.getElementById("start-focus");
  const introSect   = document.getElementById("focus-start");
  const focusSect   = document.getElementById("focus");
  const timerDisp   = document.getElementById("timer-display");
  const maskRect    = document.getElementById("mask-rect");
  const playBtn     = document.getElementById("play");
  const pauseBtn    = document.getElementById("pause");
  const resetBtn    = document.getElementById("reset");
  const popupLogro  = document.getElementById("popup-logro");
  const popupCats   = document.getElementById("popup-cats");
  const catsList    = document.getElementById("cats-list");
  const nameSample  = document.getElementById("name-sample");
  const gotoPrompt  = document.getElementById("goto-prompt");
  const promptSect  = document.getElementById("prompt");
  const anotherIdea = document.getElementById("another-idea");
  const promptText  = document.getElementById("prompt-text");

  // 3. Inicializar pantalla
  nameSpan.textContent = userName;
  const duration = focusMins * 60;
  let remaining = duration;


  
  gsap.set(maskRect, { attr: { y: 300 } });
  // 4. GSAP: animar la máscara de y=0 → y=300 (llenado de abajo a arriba)
  const fillAnim = gsap.timeline({ paused: true })
  .to(maskRect, {
    attr: { y: 0 },           
    duration: duration,
    ease: "none"
  });

  // 5. Formateo mm:ss
  function fmt(sec){
    const m = String(Math.floor(sec/60)).padStart(2,"0");
    const s = String(sec%60).padStart(2,"0");
    return `${m}:${s}`;
  }
  function update(){ timerDisp.textContent = fmt(remaining); }

  // 6. Control del reloj
  let iv;
  function startClock(){
    clearInterval(iv);
    iv = setInterval(() => {
      if (remaining > 0) {
        remaining--; update();
      } else {
        clearInterval(iv);
        showPopup();
      }
    }, 1000);
    fillAnim.play(0);
  }
  function pauseClock(){
    clearInterval(iv);
    fillAnim.pause();
  }
  function resetClock(){
    clearInterval(iv);
    remaining = duration; update();
    fillAnim.pause(0);
    gsap.set(maskRect, { attr: { y: 300 } });
  }

  // 7. Conectar botones
  startBtn.onclick = () => {
    introSect.style.display = "none";
    focusSect.style.display = "flex";
    update();
  };
  playBtn.onclick  = startClock;
  pauseBtn.onclick = pauseClock;
  resetBtn.onclick = resetClock;

  // 8. Popup y prompt
  function showPopup(){
    nameSample.textContent = userName;
    popupLogro.style.display = "flex";
    gsap.from(popupLogro, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
  }

  function showCategoryPopup() {
    // Clear previous categories
    catsList.innerHTML = '';
    
    // Add categories from localStorage
    categories.forEach(category => {
      const div = document.createElement('div');
      div.className = 'category-item';
      div.innerHTML = `
        <span>${category}</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z" fill="white"/>
        </svg>
      `;
      
      // Add click handler
      div.onclick = () => {
        // Remove selected class from all items
        document.querySelectorAll('.category-item').forEach(item => {
          item.classList.remove('selected');
        });
        // Add selected class to clicked item
        div.classList.add('selected');
        
        // Get random activity from selected category
        const activities = activitiesByCat[category];
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        promptText.textContent = randomActivity;
      };
      
      catsList.appendChild(div);
    });

    popupCats.style.display = "flex";
    gsap.from(popupCats, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
  }

  gotoPrompt.onclick = () => {
    gsap.to(popupLogro, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        popupLogro.style.display = "none";
        showCategoryPopup();
      }
    });
  };

  // Add event listener for category selection
  document.addEventListener('click', (e) => {
    if (e.target.closest('.category-item')) {
      const selectedCategory = e.target.closest('.category-item');
      if (selectedCategory.classList.contains('selected')) {
        gsap.to(popupCats, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            popupCats.style.display = "none";
            focusSect.style.display = "none";
            promptSect.style.display = "flex";
            gsap.from(promptSect, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      }
    }
  });

  // 0. Mapa de actividades por categoría
const activitiesByCat = {
  "Creatividad": [
    "Dibuja tu día como un cómic",
    "Escribe un mini-poema sobre tu color favorito",
    "Crea un logo rápido para un café imaginario"
  ],
  "Movimiento Suave": [
    "Haz 5 estiramientos de cuello",
    "Camina en tu sitio 1 minuto con los ojos cerrados",
    "Gira suavemente los hombros 10 veces"
  ],
  "Escritura": [
    "Redacta un agradecimiento a alguien cercano",
    "Escribe una micro-historia de 50 palabras",
    "Anota tres ideas para mejorar tu espacio"
  ],
  "Autocuidado": [
    "Toma 3 respiraciones profundas",
    "Aplica una mascarilla rápida en cara o manos",
    "Escribe 3 cosas buenas que has hecho hoy"
  ],
  "Respira": [
    "Haz 4-7-8: inhala 4s, retén 7s, exhala 8s (x3)",
    "Coloca una mano en el pecho y otra en el vientre, siente tu respiración",
    "Cierra los ojos y respira contando mentalmente 10 veces"
  ],
  "Sorprendeme": [
    "Mira por la ventana 2 minutos sin pensar",
    "Escucha tu canción favorita en silencio",
    "Busca un objeto a tu alrededor y obsérvalo con detalle"
  ]
};



  // 9. Init
  update();
});
