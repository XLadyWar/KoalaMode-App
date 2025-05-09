// Get blob elements
const blob1 = document.getElementById('blob1');
const blob2 = document.getElementById('blob2');
const blob3 = document.getElementById('blob3');

// Mouse movement variables
let mouseX = 0;
let mouseY = 0;

// Update mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate blob3 to follow mouse with smooth movement
function updateBlob3Position() {
    gsap.to(blob3, {
        x: (mouseX - window.innerWidth / 2) * 0.5,
        y: (mouseY - window.innerHeight / 2) * 0.5,
        duration: 0.8,
        ease: "power2.out"
    });
    requestAnimationFrame(updateBlob3Position);
}

// Start mouse following animation
updateBlob3Position();

// Animate blob1 and blob2 with random movements
function animateBlobs() {
    // Random movement for blob1
    gsap.to(blob1, {
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-100, 100),
        rotation: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(8, 12),
        ease: "power1.inOut",
        onComplete: animateBlobs
    });

    // Random movement for blob2
    gsap.to(blob2, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-80, 80),
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(6, 9),
        ease: "power1.inOut"
    });
}

// Start the blob animations
animateBlobs();

// Función para actualizar los colores según el modo
function updateBlobColors(mode) {
    if (mode === 'enfoque') {
        gsap.to(blob1, {
            backgroundColor: 'var(--enfoque-bg-2)',
            duration: 0.5
        });
        gsap.to(blob2, {
            backgroundColor: 'var(--enfoque-bg-3)',
            duration: 0.5
        });
        gsap.to(blob3, {
            backgroundColor: 'var(--enfoque-bg-1)',
            duration: 0.5
        });
    } else if (mode === 'pausa') {
        gsap.to(blob1, {
            backgroundColor: 'var(--pausa-bg-1)',
            duration: 0.5
        });
        gsap.to(blob2, {
            backgroundColor: 'var(--pausa-bg-2)',
            duration: 0.5
        });
        gsap.to(blob3, {
            backgroundColor: 'var(--pausa-bg-3)',
            duration: 0.5
        });
    } else if (mode === 'koala') {
        gsap.to(blob1, {
            backgroundColor: 'var(--koala-green)',
            duration: 0.5
        });
        gsap.to(blob2, {
            backgroundColor: ' var(--enfoque-bg-2)',
            duration: 0.5
        });
        gsap.to(blob3, {
            backgroundColor: 'var(--descaso-bg-1)',
            duration: 0.5
        });
    }
}

// Exportar la función para cambiar colores
window.updateBlobColors = updateBlobColors;
