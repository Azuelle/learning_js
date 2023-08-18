const prompt = require("prompt-sync")();

let first = prompt("First operand\n");
let second = prompt("Second operand\n");
let third = prompt("Third operand\n");
console.log(`OR result: ${first || second || third}\n` +
    `AND result: ${first && second && third}`);
