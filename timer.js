// timer.js
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar
  const userName = localStorage.getItem("userName") || "Koala";
  const focusMins = parseInt(localStorage.getItem("focusMins"),10) || 25;
  const restMins  = parseInt(localStorage.getItem("restMins"),10)  || 5;

  // Elementos
  const nameSpan   = document.getElementById("nombre-usuario");
  const startBtn   = document.getElementById("start-focus");
  const focusSect  = document.getElementById("focus");
  const introSect  = document.getElementById("focus-start");
  const timerDisp  = document.getElementById("timer-display");
  const ring       = document.getElementById("progress-ring");
  const playBtn    = document.getElementById("play");
  const pauseBtn   = document.getElementById("pause");
  const resetBtn   = document.getElementById("reset");
  const popup      = document.getElementById("popup-logro");
  const nameSample = document.getElementById("name-sample");
  const gotoPrompt = document.getElementById("goto-prompt");
  const promptSect = document.getElementById("prompt");
  const anotherIdea= document.getElementById("another-idea");
  const promptText = document.getElementById("prompt-text");

  // Mostrar nombre
  nameSpan.textContent = userName;

  // Duración y estado
  const duration = focusMins * 60;
  let remaining = duration;

  // GSAP animación anillo
  const anim = gsap.timeline({paused:true})
    .to(ring, { strokeDashoffset: 0, duration: duration, ease: "none" });

  // Formateo
  function fmt(sec){
    const m = String(Math.floor(sec/60)).padStart(2,"0");
    const s = String(sec%60).padStart(2,"0");
    return `${m}:${s}`;
  }

  // Actualiza pantalla
  function update(){ timerDisp.textContent = fmt(remaining); }

  // Reloj
  let iv;
  function startClock(){
    clearInterval(iv);
    iv = setInterval(() => {
      if(remaining>0){ remaining--; update(); }
      else{ clearInterval(iv); showPopup(); }
    },1000);
    anim.play();
  }
  function pauseClock(){ clearInterval(iv); anim.pause(); }
  function resetClock(){
    clearInterval(iv);
    remaining = duration; update();
    anim.progress(0).pause();
    gsap.set(ring, { strokeDashoffset: 880 });
  }

  // Botones
  startBtn.onclick = () => {
    introSect.style.display = "none";
    focusSect.style.display = "flex";
    update();
  };
  playBtn.onclick  = startClock;
  pauseBtn.onclick = pauseClock;
  resetBtn.onclick = resetClock;

  // Popup
  function showPopup(){
    nameSample.textContent = userName;
    popup.style.display = "flex";
  }
  gotoPrompt.onclick = () => {
    popup.style.display = "none";
    focusSect.style.display = "none";
    promptSect.style.display = "flex";
  };

  // Otra idea
  anotherIdea.onclick = () => {
    promptText.textContent = "Haz una pausa de 5 min. mirando por la ventana 🌿";
  };

  // Init
  update();
  gsap.set(ring, { strokeDashoffset: 880 });
});
