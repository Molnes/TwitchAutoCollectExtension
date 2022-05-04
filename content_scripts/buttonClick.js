var cmpoints = document.getElementsByClassName("community-points-summary")[0];
var buttons = cmpoints.getElementsByTagName("button");


/**
 * check if there are 2 elements in the array
 *      if there are 2 elements, return true
 * @param {Array} buttons 
 * @returns boolean
 */
function checkIf2Buttons(buttons) {
    if (buttons.length == 2) {
        return true;
    }
    return false;
}

/**
 * simply click the button
 * @param {button} button 
 */
function clickButton(button) {
    button.click();
}

function onError(error) {
    console.log(`Error: ${error}`);
}

/**
 * Function to run after the value is checked
 *    if the value is true, click the button
 *    if the value is false, do nothing
 * @param {String} item 
 */
function onGot(item) {
    let toggle = false;
    if (item.checked) {
        toggle = item.checked;
    }
    if (toggle) {
        if (checkIf2Buttons(buttons)) {
            clickButton(buttons[1]);
        }
    }

}

setInterval(function () {
    let getting = browser.storage.sync.get("checked");

    getting.then(onGot, onError);
}, 10000);






