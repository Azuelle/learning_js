const prompt = require("prompt-sync")();

function camelize(str = "", small_camel = true) {
    words = str.split("-");
    for (let i = small_camel ? 1 : 0; i < words.length; i++)
        if (words[i])
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    return words.join("");
}

let input = prompt();
console.log(camelize(input));
