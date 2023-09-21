// Variables
const video = document.getElementById("shakingVideo");
let shakeCount = 0;
const maxShakeCount = 2; // Set the maximum number of shakes allowed

// Function to start playing the video when shaken
function startVideoOnShake() {
    if (shakeCount < maxShakeCount) {
        video.play();
        shakeCount++;
        if (shakeCount === maxShakeCount) {
            // Disable further shake detection after reaching the maximum count
            window.removeEventListener("devicemotion", handleDeviceMotion);
        }
    }
}

// Function to handle device motion
function handleDeviceMotion(event) {
    const acceleration = event.accelerationIncludingGravity;
    const accelerationThreshold = 15; // Adjust the threshold as needed

    // Calculate the total acceleration
    const totalAcceleration = Math.sqrt(
        Math.pow(acceleration.x, 2) +
        Math.pow(acceleration.y, 2) +
        Math.pow(acceleration.z, 2)
    );

    if (totalAcceleration > accelerationThreshold) {
        // Device is shaken, start playing the video
        startVideoOnShake();
    }
}

// Start listening for device motion
window.addEventListener("devicemotion", handleDeviceMotion, false);
