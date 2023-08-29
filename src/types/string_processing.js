const prompt = require("prompt-sync")();

function ucFirst(str = "") {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function checkSpam(str = "", spam_list = ["xxx", "spam"]) {
    let lowered_str = str.toLowerCase();

    let is_spam = false;
    for (let word of spam_list)
        if (lowered_str.includes(word)) { is_spam = true; break; }

    return is_spam;
}

function truncate(str = "", len = 20) {
    if (str.length <= len) return str;
    else return str.slice(0, len - 1) + "…";
}

function extractCurrencyValue(str = "") {
    return parseInt(str.trim().slice(1));
}

let result, command = str = "";
console.log(`
u — Uppercase first letter
c — Check for spam
t — Truncate string
e — Extract currency value

q — Quit
`);
while (true) {
    command = prompt("> ").trim().toLowerCase();
    if (command == "q") break;

    str = prompt("Input: ");
    switch (command) {
        case "u":
            result = ucFirst(str);
            break;
        case "c":
            result = checkSpam(str);
            break;
        case "t":
            result = truncate(str);
            break;
        case "e":
            result = extractCurrencyValue(str);
            break;
    }

    console.log(result);
}
