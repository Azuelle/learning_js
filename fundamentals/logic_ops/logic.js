const prompt = require("prompt-sync")();

let first = prompt("First operand");
let second = prompt("Second operand");
let third = prompt("Third operand");
console.log(`OR result: ${first || second || third}\n` +
    `AND result: ${first && second && third}`);
