// Variables
const video = document.getElementById("shakingVideo");
let lastX, lastY, lastZ, threshold = 1;

// Function to start playing the video when the device is shaken
function startVideoOnShake() {
    video.play();
}

// Event listener for device motion
window.addEventListener("devicemotion", (event) => {
    const acceleration = event.accelerationIncludingGravity;
    const deltaX = Math.abs(lastX - acceleration.x);
    const deltaY = Math.abs(lastY - acceleration.y);
    const deltaZ = Math.abs(lastZ - acceleration.z);

    if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
        // Device is shaken, start playing the video
        startVideoOnShake();
    }

    lastX = acceleration.x;
    lastY = acceleration.y;
    lastZ = acceleration.z;
});
