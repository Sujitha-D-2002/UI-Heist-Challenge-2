import { createStartModeScreen } from "./startMode.js";
import { createRunModeScreen } from "./runMode.js";
import { createElement } from "../utils/htmlUtils.js";


document.addEventListener("DOMContentLoaded", function () {
  let lastSKeyPressTime = 0;
  const doublePressInterval = 40000;
  const audio = new Audio('src/assets/audio/start-engine.mp3');
  let isFirstPage = true;
  let isSecondPage = false;

  let mirrorImage=createElement("img", {
    className: "mirror-img",
    src: 'src/assets/images/mirror-1.png',
    alt: "img"
});


  document.getElementById("root").appendChild(mirrorImage);
  document.addEventListener('keyup', function (event) {
    if (event.key.toUpperCase() === 'S' && isFirstPage) {
      const now = new Date().getTime();

      if (now - lastSKeyPressTime <= doublePressInterval) {
        audio.pause();
        audio.currentTime = 0;
        isFirstPage = false;
        isSecondPage = true;
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
    document.getElementById("root").appendChild(mirrorImage);
    const runModeScreen = createRunModeScreen();
    rootElement.appendChild(runModeScreen);
    audio.pause();
    audio.currentTime = 0;
  }

  let rootElement = document.getElementById("root");
  const startModeScreen = createStartModeScreen();
  rootElement.appendChild(startModeScreen);
  
});
