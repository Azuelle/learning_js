const prompt = require("prompt-sync")();

function unique(arr = []) {
    const set = new Set(arr);
    return Array.from(set);
}

const arr = prompt("Enter array: ");
console.log(unique(arr.split(" ")));
