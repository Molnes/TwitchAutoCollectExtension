var cmpoints = document.getElementsByClassName("community-points-summary")[0];
var buttons = cmpoints.getElementsByTagName("button");



function checkIf2Buttons(buttons) {
    if (buttons.length == 2) {
        return true;
    }
    return false;
}


function clickButton(button) {
    button.click();
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    let toggle = false;
    if (item.checked) {
        toggle = item.checked;
    }
    var interval = null
    if (toggle) {


        if (checkIf2Buttons(buttons)) {
            clickButton(buttons[1]);
        }
        console.log("clicked");
    }
    else {
        clearInterval(interval);
        console.log("did not click");

    }

}
setInterval(function () {
    let getting = browser.storage.sync.get("checked");

    getting.then(onGot, onError);
}, 5000);






