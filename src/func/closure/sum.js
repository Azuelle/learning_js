const prompt = require("prompt-sync")();

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log("a+b = " + sum(+prompt("a: "))(+prompt("b: ")));
