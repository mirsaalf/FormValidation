window.onload = function() {
    let formBtn = 
        <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    isTextPresent("first-name", "First Name is required!");
    isTextPresent("last-name", "Last Name is required!");
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
