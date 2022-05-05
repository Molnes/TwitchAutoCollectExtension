class twitchPointCollector {

    constructor() {
        this.cmpoints = null;
        this.buttons = [];
        this.toggle = false;

        this.onGot = this.onGot.bind(this);
        this.onError = this.onError.bind(this);
        this.clickButton = this.clickButton.bind(this);
        this.checkIf2Buttons = this.checkIf2Buttons.bind(this);
        this.getElementsAgain = this.getElementsAgain.bind(this);

    }

    /**
 * check if there are 2 elements in the array
 *      if there are 2 elements, return true
 * @param {Array} buttons 
 * @returns boolean
 */
    checkIf2Buttons(buttons) {
        if (this.buttons.length == 2) {
            return true;
        }
        return false;
    }

    /**
     * simply click the button
     * @param {button} button 
     */
    clickButton(button) {
        button.click();
    }
    onError(error) {
        console.log(`Error: ${error}`);
    }

    getElementsAgain() {
        this.cmpoints = document.getElementsByClassName("community-points-summary")[0];
        if (this.cmpoints == undefined || this.cmpoints == null) {
            this.onError("cmpoints is undefined");
        } else {
            this.buttons = this.cmpoints.getElementsByTagName("button");
        }
    }

    /**
     * Function to run after the value is checked
     *    if the value is true, click the button
     *    if the value is false, do nothing
     * @param {String} item 
     */
    onGot(item) {

        let toggle = false;
        if (item.checked) {
            toggle = item.checked;

        }
        if (toggle) {
            if (this.cmpoints == undefined || this.cmpoints == null) {
                this.getElementsAgain();

            }
            if (this.checkIf2Buttons(this.buttons)) {
                this.clickButton(this.buttons[1]);

            }
        }

    }
}

var c = new twitchPointCollector();

setInterval(function () {
    let getting = browser.storage.sync.get("checked");

    getting.then(c.onGot, c.onError);

}, 5000);
