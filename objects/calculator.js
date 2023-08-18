const prompt = require("prompt-sync")();

function read_number(message) {
    let result = prompt(message);
    while (+result != +result || !result) {
        console.log("Invalid");
        result = prompt(message);
    }
    return +result;
}

let calculator = {
    read() {
        this[1] = read_number("First");
        this[2] = read_number("Second");
    },
    show() {
        console.log(this[1] + ", " + this[2] + "\nLast result: " + this.result);
    },
    sum() {
        this.result = this[1] + this[2];
        console.log("Sum: " + this.result);
        return this.result;
    },
}

calculator.read();
calculator.sum();
calculator.show();
