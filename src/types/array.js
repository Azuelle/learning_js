const prompt = require("prompt-sync")();

function getInput() {
    console.log("Enter an array")
    let input, arr = [];
    while (true) {
        input = prompt(`#${arr.length + 1}: `);
        if (input === "" || input === null || !isFinite(input)) break;
        arr.push(+input);
    }
    return arr;
}

function sumArray(arr = []) {
    let result = 0;
    for (let ele of arr) result += ele;
    return result;
}

function getMaxSubSum(arr = []) {
    let max_sum = 0, current_sum = 0;
    for (let ele of arr) {
        current_sum = Math.max(current_sum + ele, 0);
        max_sum = Math.max(current_sum, max_sum);
    };
    return max_sum;
}

let arr = getInput();
console.log();
console.log("Sum: " + sumArray(arr));
console.log("Maximal Sum of Subarray: " + getMaxSubSum(arr));
