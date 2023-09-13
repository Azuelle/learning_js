const prompt = require("prompt-sync")();

function range(l, r) {
    this[Symbol.iterator] = () => {
    };
}

console.log(Array.from(range(1, 5)));
