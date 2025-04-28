document.addEventListener("DOMContentLoaded", () => {
  // 1. Recuperar datos
  const userName   = localStorage.getItem("userName")   || "Koala";
  const focusMins  = parseInt(localStorage.getItem("focusMins"),10) || 25;

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
  const popup       = document.getElementById("popup-logro");
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
    popup.style.display = "flex";
  }
  gotoPrompt.onclick = () => {
    popup.style.display   = "none";
    focusSect.style.display = "none";
    promptSect.style.display = "flex";
  };
  anotherIdea.onclick = () => {
    promptText.textContent = "Haz una pausa de 5 min. mirando por la ventana 🌿";
  };

  // 9. Init
  update();
});
