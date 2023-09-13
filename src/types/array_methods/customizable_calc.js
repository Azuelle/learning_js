function Calculator() {
    this.operations = [
        { symbol: '+', func: (a, b) => a + b },
        { symbol: '-', func: (a, b) => a - b },
    ];
    this.showAllOperations = () => {
        console.log(`There are currently ${this.operations.length} operations available.`);
        for (let operation of this.operations)
            console.log(`[${operation.symbol}]: ${operation.func}`);
    }
    this.addOperation = (symbol = '+', func = (a, b) => a + b) => {
        if (!symbol.trim()) { console.log("Invalid symbol."); return; }

        let preexistingOpIndex = this.operations.findIndex(item => item.symbol == symbol);
        if (preexistingOpIndex != -1)
            this.operations[preexistingOpIndex].func = func;
        else
            this.operations.push({ symbol, func });
    }

    this.calculate = (str = "") => {
        // TODO: Type sanity check (I'm too lazy)

        // Expression form test
        str = str.trim().split(" ").filter(item => item != '');
        if (str.length > 3) { console.log("Expression invalid."); return; }

        // Check if operation is valid
        let operator = str[1];
        let operation = this.operations.find(item => item.symbol == operator);
        if (operation === undefined) { console.log("Operation unknown."); return; }

        // Calculate
        // TODO: Operands sanity check
        let a = +str[0], b = +str[2];
        let result = operation.func(a, b);
        console.log(`${a} ${operator} ${b} = ${result}`);
        return result;
    }
}

let calc = new Calculator();
calc.showAllOperations();

console.log("=== Basic Calculation Function Test ===");
calc.calculate("1 + 1");
calc.calculate(" 2   + 2   ");
calc.calculate("3 3 + 3 +");
calc.calculate("4 ++ 4");

console.log("=== Add Operations Test ===");
calc.addOperation("*", (a, b) => a * b);
calc.addOperation("^", (a, b) => a ** b);
calc.showAllOperations();
calc.calculate("9 * 5");

calc.addOperation("**", (a, b) => a ** b);
calc.addOperation("^", (a, b) => a ^ b);
calc.calculate("9 ** 5");
calc.showAllOperations();

