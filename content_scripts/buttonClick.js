class TwitchPointCollector {
    constructor() {
        this.cmpoints = null;
        this.buttons = null;
    }

    getElementsAgain() {
        // get data-test-selector="community-points-summary" and button tags inside it

        const cmpointsElement = document.querySelector("[data-test-selector='community-points-summary']");
        // find any button elements inside the cmpointsElement
        this.buttons = cmpointsElement.querySelectorAll("button");
    }

    checkIfTwoButtons(buttons) {
        return buttons.length == 2;
    }

    clickButton(button) {
        button.click();
    }

    onError(error) {
        console.error(`Error: ${error}`);
    }

    /**
     * This function is called when the value of the "checked" key in the sync storage is changed.
     * @param {Object} item - The value of the "checked" key in the sync storage.
     */
    onGot(item) {
        if (item.checked && window.location.href.includes("twitch.tv/")) {
            if (!this.cmpoints, !this.buttons || this.buttons.length == 0 || this.cmpoints == null || this.cmpoints == undefined || this.cmpoints == NaN || this.cmpoints == NaN || this.cmpoints == "") {
                this.getElementsAgain();
            }
            if (this.checkIfTwoButtons(this.buttons)) {
                this.clickButton(this.buttons[1]);
            }
        }
    }
}

const collector = new TwitchPointCollector();

setInterval(() => {
    browser.storage.sync.get("checked")
        .then(collector.onGot.bind(collector))
        .catch(collector.onError.bind(collector));
}, 5000);