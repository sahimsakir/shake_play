const shakeDiv = document.getElementById('shakeDiv');

function handleShake() {
    shakeDiv.classList.add('shake');

    // Remove the 'shake' class after the animation completes
    setTimeout(() => {
        shakeDiv.classList.remove('shake');
    }, 5000);
}

shakeDiv.addEventListener('click', handleShake);

// Add event listener for device shake (mobile)
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.acceleration;
        // Adjust the threshold value as needed
        const shakeThreshold = 10;

        if (Math.abs(acceleration.x) > shakeThreshold ||
            Math.abs(acceleration.y) > shakeThreshold ||
            Math.abs(acceleration.z) > shakeThreshold) {
            handleShake();
        }
    });
}
