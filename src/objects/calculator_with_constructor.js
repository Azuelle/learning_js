const prompt = require("prompt-sync")();

function Calculator(init_value = 0) {
    function read_number(message) {
        let result = prompt("Input number " + message);
        while (+result != +result || !result) {
            console.log("Invalid");
            result = prompt("Input number " + message);
        }
        return +result;
    }

    this.result = init_value;
    this.read_two = () => {
        this.a = read_number("a\n");
        this.b = read_number("b\n");
    };
    this.read_one = () => {
        this.a = read_number("a\n");
    };
    this.show = () => console.log(this.a + ", " + this.b + "\nLast result: " + this.result);
    this.sum = () => {
        this.result = this.a + this.b;
        console.log("Sum: " + this.result);
        return this.result;
    };
    this.mul = () => {
        this.result = this.a * this.b;
        console.log("Product: " + this.result);
        return this.result;
    };
    this.acc_a = () => {
        this.result += this.a;
        console.log("Total: " + this.result);
        return this.result;
    }
}

let calc = new Calculator(2);

calc.show();
calc.read_two();
calc.mul();
calc.acc_a();
calc.read_one();
calc.acc_a();
