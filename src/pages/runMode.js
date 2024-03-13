import { createElement } from "../utils/htmlUtils.js";
import { APP_CONSTANTS } from "../constants/appConstants.js";
import { getCurrentTime, getGreetings, getTemp } from "../utils/functionUtils.js";
import { createStartModeScreen } from "./startMode.js";

export function createRunModeScreen() {
    let rightContainer = createElement("div", {
        className: "right-icons-container",
    })

    let speakerIcon = createElement('img', {
        className: "icon top-icon",
        src: 'src/assets/icons/sound.png',
        alt: "img"
    })

    let fuelIcon = createElement('img', {
        className: "icon top-icon",
        src: 'src/assets/icons/full-power.png',
        alt: "img"
    })

    let speedIncIcon = createElement('img', {
        className: "icon bottom-icon",
        src: 'src/assets/icons/play-reverse-button.png',
        alt: "img"
    })

    let speedDecIcon = createElement('img', {
        className: "icon bottom-icon",
        src: 'src/assets/icons/play-button.png',
        alt: "img"
    })

    let smokeImage = createElement('img', {
        className: "smoke",
        src: 'src/assets/images/smoke.gif',
        alt: "img"
    })


    let leftContainer = createElement("div", { className: "left-icons-container" });

    let engineOffIcon = createElement("img", {
        className: "engine-icon",
        src: 'src/assets/icons/power-button-off.png',
        alt: "Engine Icon"
    });

    let bottomIconsContainer = createElement("div", { className: "bottom-icons" });

    let breakIcon = createElement("img", {
        className: "icon accelerator",
        src: 'src/assets/icons/accelerator.png',
        alt: "Break Icon"
    });

    let accelerateIcon = createElement("img", {
        className: "icon brake",
        src: 'src/assets/icons/brake.png',
        alt: "Accelerate Icon"
    });

    let cameraIcon = createElement('img', {
        className: "icon camera-icon",
        src: 'src/assets/icons/camera.png',
        alt: "img"
    })


    bottomIconsContainer.appendChild(breakIcon);
    bottomIconsContainer.appendChild(accelerateIcon);

    leftContainer.appendChild(engineOffIcon);
    leftContainer.appendChild(bottomIconsContainer);

    rightContainer.appendChild(speakerIcon);
    rightContainer.appendChild(fuelIcon);
    rightContainer.appendChild(speedIncIcon);
    rightContainer.appendChild(speedDecIcon);

    let runModeScreen = createElement("div", {
        className: "run-mode-screen"
    });

    let runModeContainer = createElement("div", {
        className: "run-mode-container-1"
    });

    let currentTimeElement = createElement("div", {
        className: "current-time",
        textContent: getCurrentTime(),
    });

    let userWelcomeMsg = createElement("div", {
        className: "greeting-msg",
        textContent: getGreetings() + " Pavithra & Sujitha",
    });

    let temp = createElement("div", {
        className: "temp",
    });

    let currentTemp = createElement("div", {
        className: "current-temp",
        textContent: "Fetching temperature...",
    });

    let videoIcon = document.createElement("video");
    videoIcon.id = "vid";
    videoIcon.muted = true;
    videoIcon.autoplay = true;


    getTemp().then(temp => {
        currentTemp.textContent = temp[0] + "°C";

        switch (temp[1]) {
            case 'Clear':
                tempImg.src = "src/assets/images/clear.png";
                break;
            case 'Rain':
                tempImg.src = "src/assets/images/rain.png";
                break;
            case 'Snow':
                tempImg.src = "src/assets/images/snow.png";
                break;
            case 'Clouds':
                tempImg.src = "src/assets/images/cloud.png";
                break;
            case 'Haze':
                tempImg.src = "src/assets/images/mist.png";
                break;
            default:
                tempImg.src = "src/assets/images/cloud.png";
        }
    }).catch(error => {
        console.error('There was a problem fetching the weather data:', error);
        currentTemp.textContent = "Temperature data unavailable";
    });

    let tempMsg = createElement("div", {
        className: "temp-msg",
        textContent: "Outside",
    });

    let tempImg = (createElement("img", {
        className: "weather-img",
        src: 'src/assets/images/clear.png',
        alt: "img"
    }));

    tempMsg.appendChild(tempImg);

    let runModeContain = createElement("div", {
        className: "run-mode-container-2"
    });

    let currentDisel = createElement("div", {
        className: "current-disel",
    });
    let quantity = createElement("div", {
        className: "current-disel-quantity",
        textContent: 60,
    });
    let measure = createElement("div", {
        className: "current-disel-quantity-measure",
        textContent: "Ltrs",
    });

    let progressDiv = createElement("div", {
        className: "current-disel-progress",
    });

    let progress = createElement("div", {
        className: "progress",
    });

    let hanganimateImage = createElement("img", {
        className: "hang-animate-img",
        src: 'src/assets/images/monkey-fixed.png',
        alt: "img"
    });

    let handImg = createElement("img", {
        className: "hand-img",
        src: 'src/assets/images/hand-2.png',
        alt: "img"
    });


    progressDiv.appendChild(progress);
    currentDisel.appendChild(quantity);
    currentDisel.appendChild(measure);
    currentDisel.appendChild(progressDiv);

    let currentSpeed = createElement("div", {
        className: "current-speed",
    });

    let warnDiv = createElement("div", {
        className: "warn-div",
    });

    let warnIcon = createElement("img", {
        className: "warn-img",
        src: 'src/assets/icons/warning.png',
        alt: "img"
    });

    let warnMsg = createElement("div", {
        className: "warn-msg",
        textContent: APP_CONSTANTS.WARNING_MSG,
    });
    let speed = createElement("div", {
        className: "current-speed-quantity",
        textContent: 0,
    });
    let speedMeasure = createElement("div", {
        className: "current-speed-measure",
        textContent: "Kmph",
    });

    let steering = createElement("img", {
        id: "steering-image",
        className: "steering-img rotated",
        src: 'src/assets/images/steering-wheel.png',
        alt: "img"
    });

    let musicIcon=createElement("img",{
        className: "music-icon",
        src:'src/assets/icons/player.png'
    })

    let musicSpeaker1Icon=createElement("img",{
        className: "music-speaker-one-icon",
        src:'src/assets/icons/speaker.png'
    })

    let musicSpeaker2Icon=createElement("img",{
        className: "music-speaker-second-icon",
        src:'src/assets/images/speaker.png'
    })
    warnDiv.appendChild(warnIcon);
    warnDiv.appendChild(warnMsg);
    currentSpeed.appendChild(warnDiv);
    currentSpeed.appendChild(speed);
    currentSpeed.appendChild(speedMeasure);
    // videoContainer.appendChild(videoIcon);

    temp.appendChild(currentTemp);
    temp.appendChild(tempMsg);

    runModeContainer.appendChild(currentTimeElement);
    runModeContainer.appendChild(userWelcomeMsg);
    runModeContainer.appendChild(temp);

    runModeContain.appendChild(currentDisel);
    runModeContain.appendChild(currentSpeed);
    runModeContain.appendChild(steering);
    // runModeScreen.appendChild(mirrorImage);
    runModeScreen.appendChild(hanganimateImage);
    runModeScreen.appendChild(runModeContainer);
    runModeScreen.appendChild(runModeContain);
    runModeScreen.appendChild(rightContainer);
    runModeScreen.appendChild(leftContainer);
    runModeScreen.appendChild(cameraIcon);
    runModeScreen.appendChild(smokeImage);
    runModeScreen.appendChild(videoIcon);
    runModeScreen.appendChild(musicIcon);
    runModeScreen.appendChild(musicSpeaker1Icon);
    runModeScreen.appendChild(musicSpeaker2Icon);

    runModeScreen.appendChild(handImg);

    // return runModeScreen;

    let rotationAngleforbg = 0;
    const leftTurnAudio = new Audio('src/assets/audio/car-moving.wav');
    const rightTurnAudio = new Audio('src/assets/audio/car-moving.wav');
    let isLeftTurnAudioPlaying = false;
    let isRightTurnAudioPlaying = false;
    let isEngineOff = false;


    document.addEventListener("keydown", function (event) {
        const element = document.getElementById('steering-image');
        if (parseInt(speed.textContent) > 0) {
            switch (event.keyCode) {
                case 37: // Left arrow key
                    rotationAngleforbg += 10;
                    if (rotationAngleforbg > 180) {
                        rotationAngleforbg = 180;
                    }
                    element.style.transform = `rotate(${rotationAngleforbg}deg)`;
                    document.body.style.backgroundImage = 'url("src/assets/images/Car-without-bg.png"), url("src/assets/images/background.gif")';

                    if (!isLeftTurnAudioPlaying) {
                        leftTurnAudio.currentTime = 0;
                        leftTurnAudio.play();
                        isLeftTurnAudioPlaying = true;
                    }
                    break;
                case 39: // Right arrow key
                    rotationAngleforbg -= 10;
                    element.style.transform = `rotate(${rotationAngleforbg}deg)`;
                    if (rotationAngleforbg < -180) {
                        rotationAngleforbg = -180;
                    }
                    document.body.style.backgroundImage = 'url("src/assets/images/Car-without-bg.png"), url("src/assets/images/background.gif")';

                    if (!isRightTurnAudioPlaying) {
                        rightTurnAudio.currentTime = 0;
                        rightTurnAudio.play();
                        isRightTurnAudioPlaying = true;
                    }
                    break;
            }
        }

        

    });

    let isVideoMuted = true;
    let currentStream = null;

    document.addEventListener("keydown", function (event) {
        if ((event.key == "C" || event.key == "c") && isSecondPage) {
            let videoElement = document.getElementById("vid");
            videoElement.style.display = "block";
            if (isVideoMuted) {
                if (currentStream && videoElement.srcObject === currentStream) {
                    videoElement.muted = false;
                    isVideoMuted = false;
                } else {
                    navigator.mediaDevices
                        .getUserMedia({
                            video: true,
                            audio: true,
                        })
                        .then((stream) => {
                            currentStream = stream;
                            videoElement.srcObject = stream;
                            videoElement.muted = false;
                            videoElement.addEventListener("loadedmetadata", () => {
                                videoElement.play();
                                cameraIcon.style.border = "5px solid yellow";
                            });
                            isVideoMuted = false;
                        })
                        .catch((error) => {
                            console.error("Error accessing media devices:", error);
                            alert("Error accessing camera: " + error.message);
                        });
                }
            } else {
                videoElement.muted = true;
                isVideoMuted = true;
                if (currentStream) {
                    cameraIcon.style.border = "5px solid #BAC8D3";
                    videoElement.style.display = "none";
                    currentStream.getTracks().forEach((track) => track.stop());
                    videoElement.srcObject = null;
                    currentStream = null;
                }
            }
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 37) { // Left key up
            leftTurnAudio.pause();
            leftTurnAudio.currentTime = 0;
            isLeftTurnAudioPlaying = false;
            hanganimateImage.src = "src/assets/images/1601312667_151452.gif";
        } else if (event.keyCode === 39) { // Right key up
            rightTurnAudio.pause();
            rightTurnAudio.currentTime = 0;
            isRightTurnAudioPlaying = false;
            hanganimateImage.src = "src/assets/images/1601312667_151452.gif";
        }
    });


    document.onkeydown = function (e) {
        const element = document.getElementById('steering-image');
        if (parseInt(speed.textContent) > 0) {
            switch (e.keyCode) {
                case 37:
                    rotationAngle += 10;
                    element.style.transform = `rotate(${rotationAngle}deg)`;
                    speedIncIcon.style.border = "5px solid yellow";
                    speedDecIcon.style.border = "5px solid #BAC8D3";
                    break;
                case 39:
                    rotationAngle -= 10;
                    element.style.transform = `rotate(${rotationAngle}deg)`;
                    speedDecIcon.style.border = "5px solid yellow";
                    speedIncIcon.style.border = "5px solid #BAC8D3";
                    break;
            }
        }
    }

    document.onkeyup = function (e) {
        if (e.keyCode === 37 || e.keyCode === 39) {
            speedIncIcon.style.border = "5px solid #BAC8D3";
            speedDecIcon.style.border = "5px solid #BAC8D3";
        }
    };

    let rotationAngle = 0;
    let remainingTime = 60;
    let isIntervalRunning = true; // Flag to track if the interval is running
    let interval;
    let lastValue;

    function decrementTime() {
        remainingTime--;
        quantity.textContent = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(interval);
            quantity.textContent = 0;
        }
        if (parseInt(quantity.textContent) <= 15) {
            fuelIcon.src = 'src/assets/icons/low-power.png'
        }
    }

    function startInterval() {
        interval = setInterval(decrementTime, 5000);
    }

    startInterval();

    let isSecondPage = true;


    document.addEventListener("keydown", function (event) {
        if (event.key === "r" || event.key === "R") {
            if (quantity) {
                quantity.textContent = 60; // Reset quantity to 60
                fuelIcon.src = 'src/assets/icons/full-power.png'
            } else {
                console.error("Quantity element not found");
            }
            let progressBar = document.querySelector('.progress');
            if (progressBar) {
                progressBar.style.width = '0';
                progressBar.style.animation = 'none';
                void progressBar.offsetWidth;
                progressBar.style.animation = 'fill 1000s linear forwards';
            } else {
                console.error('Progress bar not found');
            }
            remainingTime = 60;
            clearInterval(interval);
            interval = setInterval(function () {
                remainingTime--;
                quantity.textContent = remainingTime;
                if (remainingTime <= 0) {
                    clearInterval(interval);
                    quantity.textContent = 0;
                }
            }, 5000);
        }
    });

    const audioFiles = {
        1: 'src/assets/audio/kamalsong.mp3',
        2: 'src/assets/audio/DhanushBgm.mp3',
        3: 'src/assets/audio/vijayBgm.mp3',
        4: 'src/assets/audio/DhanushBgm.mp3'
    };
    
    let currentAudio = null;

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const audioSrc = audioFiles[key];
    
        if (key === 'M' || key==='m') {
            speakerAudioIcon.style.border = "5px solid #BAC8D3";
            musicIcon.src = "src/assets/icons/music-note.png"; 
            musicIcon.style.top="45%";
            stopAndResetAudio();
            return; 
        }
    
        if (audioSrc) {
            playSelectedAudio(audioSrc);
        }
    });
    
    function playSelectedAudio(audioSrc) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
        speakerAudioIcon.style.border = "5px solid yellow";
        musicIcon.src = "src/assets/images/animate-music.gif";
        musicIcon.style.top="46%";
    
        setTimeout(() => {
            stopAndResetAudio();
        }, 20000); 
    }
    
    function stopAndResetAudio() {
      
        if (currentAudio) {
            speakerAudioIcon.style.border = "5px solid #BAC8D3";
            musicIcon.src = "src/assets/icons/music-note.png"; 
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
        
    }
    
    
    
    

    let intervalId;
    let isAccelerating = false;
    let isBrake = false;
    let startaudio;

    document.addEventListener("keydown", function (event) {
        if (!runModeScreen) return;
        if ((event.key === "a" || event.key === "A") && isSecondPage) {
            if (!isAccelerating) {
                isAccelerating = true;
                intervalId = setInterval(increaseSpeed, 500);
                startaudio = new Audio('src/assets/audio/acceleration.mp3');
                document.body.style.backgroundImage = 'url("src/assets/images/Car-without-bg.png"), url("src/assets/images/background.gif")';
                hanganimateImage.src = "src/assets/images/1601312667_151452.gif";
                startaudio.play();
                breakIcon.style.border = "4px solid yellow";
                accelerateIcon.style.border = "5px solid #BAC8D3";
            }
        }

        if (event.key === "e" || event.key === "E" && isSecondPage) {
            isEngineOff = true;
            stopEngine();
        }

        if (event.key === "s" || event.key === "S" && isSecondPage && isEngineOff) {
            console.log("restart");
            startEngine();
        }
        if (parseInt(speed.textContent) > 0) {
            if ((event.key === "b" || event.key === "B") && isSecondPage) {
                warnIcon.style.display = "none";
                warnMsg.style.display = "none";
                hanganimateImage.src = "src/assets/images/monkey-fixed.png";
                let brakeaudio = new Audio('src/assets/audio/car-brake-fx.wav');
                let smokeElements = document.getElementsByClassName("smoke");
                if (smokeElements.length > 0) {
                    smokeElements[0].style.display = "block";
                }
                document.body.style.backgroundImage = 'url("src/assets/images/Car-without-bg.png"), url("src/assets/images/bg-fixed.jpeg")';
                brakeaudio.play();
                isBrake = true;
                accelerateIcon.style.border = "4px solid yellow";
                brake();
            }
        }

        if ((event.key == 'h' || event.key == 'H') && isSecondPage) {
            let hornAudio = new Audio('src/assets/audio/car-horn.mp3');
            hornAudio.play();
            speakerIcon.src = "src/assets/icons/speaker-filled.png";
            speakerIcon.style.border = "4px solid yellow";
        }
    });

    document.addEventListener("keyup", function (event) {
        if (!runModeScreen) return;
        if ((event.key === "a" || event.key === "A") && isSecondPage) {
            clearInterval(intervalId);
            isAccelerating = false;
            decreaseSpeed();
            let startaudio = new Audio('src/assets/audio/acceleration.mp3');
            startaudio.pause();
            // startaudio.currentTime = 0; 
            breakIcon.style.border = "5px solid #BAC8D3";
        }

        if ((event.key === "b" || event.key === "B") && isSecondPage) {
            let brakeaudio = new Audio('src/assets/audio/car-brake-fx.wav');
            let smokeElements = document.getElementsByClassName("smoke");
            accelerateIcon.style.border = "5px solid #BAC8D3";
            if (smokeElements.length > 0) {
                smokeElements[0].style.display = "none";
            }
            brakeaudio.pause();
            isBrake = false;
            // startaudio.currentTime = 0;
        }

        if ((event.key == 'h' || event.key == 'H') && isSecondPage) {
            let hornAudio = new Audio('src/assets/audio/car-horn.mp3');
            hornAudio.pause();
            speakerIcon.src = "src/assets/icons/sound.png";
            speakerIcon.style.border = "5px solid #BAC8D3";
        }

        if ((event.key === "e" || event.key === "E") && isSecondPage) {
            engineOffIcon.style.border = "0px";
        }
    });

    function increaseSpeed() {
        let currentSpeed = parseInt(speed.textContent);
        let newSpeed = currentSpeed + 2;
        if (newSpeed <= 280) {
            speed.textContent = newSpeed;
            if (newSpeed >= 80) {
                warnIcon.style.display = "block";
                warnMsg.style.display = "block";
            }
        }
    }

    function decreaseSpeed() {
        let currentSpeed = parseInt(speed.textContent);
        let newSpeed = currentSpeed - 1;
        if (newSpeed >= 0) {
            speed.textContent = newSpeed;
        }
        if (newSpeed < 80) {
            warnIcon.style.display = "none";
            warnMsg.style.display = "none";
        }
    }
    let rootElement = document.getElementById("root");
    const startModeScreen = createStartModeScreen();

    function stopEngine() {
        accelerateIcon.style.border = "5px solid #BAC8D3";
        document.body.style.backgroundImage = 'url("src/assets/images/Car-without-bg.png"), url("src/assets/images/bg-fixed.jpeg")';
        hanganimateImage.src = "src/assets/images/monkey-fixed.png";
        warnIcon.style.display = "none";
        warnMsg.style.display = "none";
        runModeScreen.style.display = "none";

        rootElement.appendChild(startModeScreen);
        if (isIntervalRunning) {
            lastValue = quantity.textContent;
            clearInterval(interval); // Pause the interval
            isIntervalRunning = false;
            quantity.textContent = lastValue;
        }
        clearInterval(intervalId);
        isAccelerating = false;
        speed.textContent = 0;
        isSecondPage = false;
    }

    function startEngine() {
        isSecondPage = true;
        startModeScreen.style.display = "none";
        runModeScreen.style.display = "block";

        rootElement.appendChild(runModeScreen);
        isAccelerating = true;
        if (!isIntervalRunning) {
            quantity.textContent = lastValue;
            startInterval(); // Resume the interval
            isIntervalRunning = true;

        }
    }

    function brake() {
        clearInterval(intervalId);
        isAccelerating = false;
        speed.textContent = 0;
    }

    return runModeScreen;
}
