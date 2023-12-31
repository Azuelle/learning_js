const prompt = require("prompt-sync")();

function aclean(arr = [""]) {
    map = new Map();
    for (let word of arr) {
        map.set(word.toLowerCase().split("").sort().join(""), word);
    }
    return Array.from(map.values());
}

const arr = prompt("Enter array: ");
console.log(aclean(arr.split(" ")));