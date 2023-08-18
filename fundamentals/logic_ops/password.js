const prompt = require("prompt-sync")();

let username = prompt("Input username\n", "Anonymous");
if (!username)
    console.log("Operation canceled by user.");
else if (username != "Azuelle")
    console.log("Unknown user. Operation aborted.");
else {
    let password = prompt("Input password\n");
    if (!password)
        console.log("Operation canceled by user.");
    else if (password != "totally_legit_pwd")
        console.log("Wrong password. Operation aborted.");
    else
        console.log("hey you guessed my password congratz i guess");
}
