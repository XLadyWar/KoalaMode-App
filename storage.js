
document.addEventListener("DOMContentLoaded", () => {
    // Navegación por pasos
    const steps = ["paso1","paso2","paso3","paso4"];
    steps.forEach((id,i) => {
      const next = document.getElementById(`to-step-${i+2}`);
      if(next){
        next.onclick = () => {
          document.getElementById(steps[i]).style.display = "none";
          document.getElementById(steps[i+1]).style.display = "flex";
        };
      }
    });
  
    // Al hacer clic en “Ir al Timer”
    document.getElementById("to-timer").addEventListener("click", () => {
      // 1. Nombre
      const name = document.getElementById("nombreInput").value.trim() || "Koala";
      localStorage.setItem("userName", name);
  
      // 2. Minutos de enfoque
      const focus = parseInt(document.getElementById("focusInput").value,10) || 25;
      localStorage.setItem("focusMins", focus);
  
      // 3. Minutos de descanso
      const rest = parseInt(document.getElementById("restInput").value,10) || 5;
      localStorage.setItem("restMins", rest);
  
      // 4. Categorías seleccionadas
      const cats = Array.from(document.querySelectorAll(".category-item.selected span"))
        .map(el => el.textContent);
      localStorage.setItem("categories", JSON.stringify(cats));
      
    });
  
    // Toggle selección de categorías
    document.querySelectorAll(".category-item").forEach(item => {
      item.onclick = () => item.classList.toggle("selected");
    });
  });
  