window.onload = function() {
    let formBtn = 
        <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorMessages();
    isTextPresent("first-name", "First Name is required!");
    isTextPresent("last-name", "Last Name is required!");
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the text box with the given id has some text inside
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the
 * text box 
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = 
        <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errSpan = 
            <HTMLSpanElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
