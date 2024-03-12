import { createElement } from "../utils/htmlUtils.js";
import { APP_CONSTANTS } from "../constants/appConstants.js";

export function createStartModeScreen() {
    let startModeScreen = createElement("div", {
        className: "start-mode-screen"
    });

    let startIcon = createElement("img", {
        className: "start-img",
        src: 'src/assets/icons/power-button-on.png',
        alt: "img"
    });

    let hangImage = createElement("img", {
        className: "hang-img",
        src: 'src/assets/images/monkey-fixed.png',
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

    startModeScreen.appendChild(hangImage);
    startModeScreen.appendChild(startIcon);
    startModeScreen.appendChild(startMsg);
    startModeScreen.appendChild(caption);

    return startModeScreen;
}
