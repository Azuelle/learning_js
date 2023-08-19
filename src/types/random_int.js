const prompt = require("prompt-sync")();

function rand_int(lower, upper) {
    return Math.floor(Math.random() * (upper + 1 - lower) + lower);
}

// TODO: Sanity check for inputs
let lower = +prompt("Lower bound: ");
let upper = +prompt("Upper bound: ");
let repeats = +prompt("Numbers to generate: ");

for (let i = 0; i < repeats; i++)
    console.log(rand_int(lower, upper));
