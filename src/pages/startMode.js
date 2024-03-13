import { createElement } from "../utils/htmlUtils.js";
import { APP_CONSTANTS } from "../constants/appConstants.js";

export function createStartModeScreen() {
    let startModeScreen = createElement("div", {
        className: "start-mode-screen"
    });

    let hangDiv=createElement("div", {
        className: "hang-div",
    });

    let screenDiv=createElement("div",{
        className:"screen-div"
    })

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
    
    hangDiv.appendChild(hangImage);
    screenDiv.appendChild(startIcon);
    screenDiv.appendChild(startMsg);
    screenDiv.appendChild(caption);

    

    startModeScreen.appendChild(hangDiv);
    startModeScreen.appendChild(screenDiv);

    return startModeScreen;
}
