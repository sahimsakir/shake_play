const shakeDiv = document.getElementById('shakeDiv');

function handleShake(event) {
    if (event.accelerationIncludingGravity) {
        const { x, y, z } = event.accelerationIncludingGravity;
        const acceleration = Math.sqrt(x * x + y * y + z * z);

        if (acceleration > 20) {
            shakeDiv.classList.add('shaking');

            setTimeout(() => {
                shakeDiv.classList.remove('shaking');
            }, 500);
        }
    }
}

window.addEventListener('devicemotion', handleShake);
