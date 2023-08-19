/*** Original ***
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);
*/

const prompt = require("prompt-sync")();

function confirm(str) {
    let response = prompt(str).toLowerCase();
    if (response == "y" || response == "yes") return true;
    else return false;
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree? ",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);
