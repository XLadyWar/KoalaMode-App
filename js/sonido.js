// Audio elements for different sounds
const focusEndSound = new Audio('../assets/Bloop Ting.wav');
const koalaEndSound = new Audio('../assets/Sparkle.wav');

// Function to play sound when focus mode ends
function playFocusEndSound() {
    focusEndSound.currentTime = 0; // Reset the audio to start
    focusEndSound.play().catch(error => {
        console.log('Error playing focus end sound:', error);
    });
}

// Function to play sound when koala mode ends
function playKoalaEndSound() {
    koalaEndSound.currentTime = 0; // Reset the audio to start
    koalaEndSound.play().catch(error => {
        console.log('Error playing koala end sound:', error);
    });
}

// Function to handle timer end sound based on mode
function playTimerEndSound(isRestTimer) {
    if (isRestTimer) {
        playKoalaEndSound();
    } else {
        playFocusEndSound();
    }
}

// Export the functions to use them in other files
export { playFocusEndSound, playKoalaEndSound, playTimerEndSound };
