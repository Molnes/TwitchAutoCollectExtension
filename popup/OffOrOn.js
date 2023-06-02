/**
 *  Saves options to browser.storage
 * @param {Event} e Event object
 * @returns {Promise<void>}
 */
async function saveOptions(e) {
    e.preventDefault();
   return await browser.storage.sync.set({
        checked: document.getElementById("switch").checked
    });
}

async function restoreOptions() {

    const {checked = false} = await browser.storage.sync.get("checked");
    document.getElementById("switch").checked = checked;
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("switch").addEventListener("change", saveOptions);
