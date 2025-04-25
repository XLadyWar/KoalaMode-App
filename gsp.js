document.addEventListener("DOMContentLoaded", () => {
    const progressCircle = document.getElementById("progress-ring");
    const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
  
    let duration = 25 * 60; // 25 minutos
    let timeline = gsap.timeline({ paused: true });
    let remaining = duration;
    let interval;
  
    // Animación del círculo con GSAP
    function initAnimation() {
      timeline.to(progressCircle, {
        strokeDashoffset: 0,
        duration: duration,
        ease: "none"
      });
    }
  
    function formatTime(seconds) {
      const m = Math.floor(seconds / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    }
  
    function startCountdown() {
      clearInterval(interval);
      interval = setInterval(() => {
        if (remaining > 0) {
          remaining--;
          timerDisplay.textContent = formatTime(remaining);
        } else {
          clearInterval(interval);
          timeline.pause();
        }
      }, 1000);
      timeline.play();
    }
  
    function pauseCountdown() {
      clearInterval(interval);
      timeline.pause();
    }
  
    function resetCountdown() {
      clearInterval(interval);
      remaining = duration;
      timerDisplay.textContent = formatTime(remaining);
      timeline.progress(0).pause();
      gsap.set(progressCircle, { strokeDashoffset: 880 });
    }
  
    startButton.addEventListener("click", () => {
      if (timeline.progress() === 0) initAnimation();
      startCountdown();
    });
  
    pauseButton.addEventListener("click", pauseCountdown);
    resetButton.addEventListener("click", resetCountdown);
  
    // Init
    timerDisplay.textContent = formatTime(remaining);
    gsap.set(progressCircle, { strokeDashoffset: 880 });
  });
  