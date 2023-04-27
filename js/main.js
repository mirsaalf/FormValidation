window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    isTextPresent("first-name", "First Name is required!");
    isTextPresent("last-name", "Last Name is required!");
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errSpan = textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
