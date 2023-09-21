// Initialize gyronorm.js
const gn = new GyroNorm();

// Function to start playing the video when the device is shaken
function startVideoOnShake() {
    const video = document.getElementById("shakingVideo");

    // Start video playback
    video.play();
}

// Listen for device motion events
gn.init().then(function () {
    // Set gyroscope event threshold for shake detection
    gn.setOption("threshold", 10);

    // Subscribe to the gyroscope data
    gn.start(data => {
        const isShaking = data.dm === true || data.dmx === true || data.dmy === true || data.dmz === true;

        if (isShaking) {
            // Device is shaking, start playing the video
            startVideoOnShake();
        }
    });
}).catch(function (e) {
    console.error("Device does not support gyroscope or gyronorm.js initialization failed.");
});
