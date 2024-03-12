import { createElement } from "../utils/htmlUtils.js";
import { APP_CONSTANTS } from "../constants/appConstants.js";


document.addEventListener("DOMContentLoaded", function () {
  let startModeScreen=createElement("div", {
    className: "start-mode-screen"
  });

  let startIcon = createElement("img", {
    className: "start-img",
    src: 'src/assets/icons/power-button-on.png',
    alt: "img"
  });

  let startMsg = createElement("p", {
    className: "start-msg",
    textContent: APP_CONSTANTS.ENGINE_ON,
  });

  let caption = createElement("p", {
    className: "caption",
    textContent: APP_CONSTANTS.CAPTION,
  });

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
    src: 'src/assets/images/push-button.png',
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


  bottomIconsContainer.appendChild(breakIcon);
  bottomIconsContainer.appendChild(accelerateIcon);

  leftContainer.appendChild(engineOffIcon);
  leftContainer.appendChild(bottomIconsContainer);

  rightContainer.appendChild(speakerIcon);
  rightContainer.appendChild(fuelIcon);
  rightContainer.appendChild(speedIncIcon);
  rightContainer.appendChild(speedDecIcon);

  startModeScreen.appendChild(startIcon);
  startModeScreen.appendChild(startMsg);
  startModeScreen.appendChild(caption);

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




  const leftTurnAudio = new Audio('src/assets/audio/car-start.wav');
  const rightTurnAudio = new Audio('src/assets/audio/car-start.wav');
  
  document.onkeydown = function(e) {
    const element = document.getElementById('steering-image');
    switch (e.keyCode) {
        case 37: 
          rotationAngle += 10;
          element.style.transform = `rotate(${rotationAngle}deg)`;
          console.log(rotationAngle);
          leftTurnAudio.currentTime = 0;
          leftTurnAudio.play(); 
          break;
        case 39: 
          rotationAngle -= 10;
          element.style.transform = `rotate(${rotationAngle}deg)`;
          rightTurnAudio.currentTime = 0; 
          rightTurnAudio.play();
          break;
    }
  };
  
  document.onkeyup = function(e) {
    if (e.keyCode === 37) { 
      leftTurnAudio.pause();
      leftTurnAudio.currentTime = 0; 
    } else if (e.keyCode === 39) { 
      rightTurnAudio.pause();
      rightTurnAudio.currentTime = 0;
    }
  };
  

document.onkeydown = function(e) {
  const element = document.getElementById('steering-image');
  switch (e.keyCode) {
      case 37: 
        rotationAngle += 10;
        element.style.transform = `rotate(${rotationAngle}deg)`;
        speedIncIcon.style.border = "8px solid yellow";
        speedDecIcon.style.border = "none";
        console.log(rotationAngle);
        break;
      case 39: 
        rotationAngle -= 10;
        element.style.transform = `rotate(${rotationAngle}deg)`;
        speedDecIcon.style.border = "8px solid yellow";
        speedIncIcon.style.border = "none";
        break;
  }
};

document.onkeyup = function(e) {
  if (e.keyCode === 37 || e.keyCode === 39) {
    speedIncIcon.style.border = "none";
    speedDecIcon.style.border = "none";
  }
};


  warnDiv.appendChild(warnIcon);
  warnDiv.appendChild(warnMsg);
  currentSpeed.appendChild(warnDiv);
  currentSpeed.appendChild(speed);
  currentSpeed.appendChild(speedMeasure);

  temp.appendChild(currentTemp);
  temp.appendChild(tempMsg);

  runModeContainer.appendChild(currentTimeElement);
  runModeContainer.appendChild(userWelcomeMsg);
  runModeContainer.appendChild(temp);

  runModeContain.appendChild(currentDisel);
  runModeContain.appendChild(currentSpeed);
  runModeContain.appendChild(steering);
  runModeScreen.appendChild(runModeContainer);
  runModeScreen.appendChild(runModeContain);
  runModeScreen.appendChild(rightContainer);
  runModeScreen.appendChild(leftContainer);

  // document.querySelector(".warn-div").style.display = "none";
  getTemp().then(temp => {
    console.log(temp);
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


  let rotationAngle = 0;
  let remainingTime = 60;
  let interval = setInterval(function () {
    remainingTime--;
    quantity.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(interval);
      quantity.textContent = 0;
    }
  }, 5000);

  document.addEventListener("keydown", function (event) {
    if (event.key === "r" || event.key === "R") {
      if (quantity) {
        quantity.textContent = 60; // Reset quantity to 60
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

  let intervalId;
  let isAccelerating = false;
  let isBrake = false;

  document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
      if (!isAccelerating) {
        isAccelerating = true;
        intervalId = setInterval(increaseSpeed, 500);
        let startaudio = new Audio('src/assets/audio/acceleration.mp3');
        startaudio.play();
        breakIcon.style.border = "4px solid yellow";
        accelerateIcon.style.border = "5px solid #BAC8D3";
      }
    }

    if (event.key === "e" || event.key === "E") {
      engineOffIcon.style.border="8px solid yellow";
      stopEngine();
    }

    if (event.key === "b" || event.key === "B") {
      let brakeaudio = new Audio('src/assets/audio/car-brake-fx.wav');
      brakeaudio.play();
      isBrake=true;
      accelerateIcon.style.border = "4px solid yellow";
      brake();
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "a" || event.key === "A") {
      clearInterval(intervalId);
      isAccelerating = false;
      intervalId = setInterval(decreaseSpeed, 5000);
      let startaudio = new Audio('src/assets/audio/acceleration.mp3');
      startaudio.pause();
      startaudio.currentTime = 0; // Reset audio to the beginning
      breakIcon.style.border = "5px solid #BAC8D3";
    }

    if (event.key === "b" || event.key === "B") {
      let brakeaudio = new Audio('src/assets/audio/car-brake-fx.wav');
      brakeaudio.pause();
      isBrake=false;
      startaudio.currentTime = 0;
    
    }
    if (event.key === "e" || event.key === "E") {
      engineOffIcon.style.border="0px";
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
  }


  function stopEngine() {
    clearInterval(intervalId);
    isAccelerating = false;
    speed.textContent = 0;
  }

  function brake() {
    clearInterval(intervalId);
    isAccelerating = false;
    speed.textContent = 0;
  }

  let lastSKeyPressTime = 0;
  const doublePressInterval = 40000;
  const audio = new Audio('src/assets/audio/start-engine.mp3');

  document.addEventListener('keyup', function (event) {
    if (event.key.toUpperCase() === 'S') {
      const now = new Date().getTime();

      if (now - lastSKeyPressTime <= doublePressInterval) {
        audio.pause();
        audio.currentTime = 0;
        goToNextScreen();
      } else {
        audio.play();
      }
      lastSKeyPressTime = now;
    }
  });

  function goToNextScreen() {
    let rootElement = document.getElementById("root");
    rootElement.innerHTML = '';
    rootElement.appendChild(runModeScreen);
    audio.pause();
    audio.currentTime = 0;
  }




  let rootElement = document.getElementById("root");
  rootElement.appendChild(startModeScreen);
});


function getCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let time = hours + ": " + minutes + " " + meridiem;
  return time;

}

function getGreetings() {

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingText = "";

  if (currentHour < 12) {
    greetingText = "Good morning...!";
  } else if (currentHour < 18) {
    greetingText = "Good afternoon...!";
  } else {
    greetingText = "Good evening...!";
  }

  return greetingText;
}

async function getTemp() {
  const apiKey = 'c9fd43801139727fa8cfa688df99a18f';
  const city = 'Chennai';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const currentTemperature = data.main.temp;
    const desc = data.weather[0].main;

    const tempDetails = [currentTemperature, desc];
    console.log(`Current temperature in ${city}: ${currentTemperature}°C +${desc}`);
    return tempDetails;
  } catch (error) {
    throw new Error('There was a problem fetching the weather data:', error);
  }
}

