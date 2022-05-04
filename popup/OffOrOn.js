function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        checked: document.getElementById("switch").checked
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.getElementById("switch").checked = result.checked || false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("checked");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("switch").addEventListener("change", saveOptions);
