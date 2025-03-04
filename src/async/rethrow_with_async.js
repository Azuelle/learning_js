const prompt = require("prompt-sync")();

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) return await response.json();
    else throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    while (true) {
        let name = prompt("Enter a name: ", "iliakan");
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            console.log(`Full name: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("No such user, please reenter.");
            } else {
                throw err;
            }
        }
    }
}

try {
    demoGithubUser();
} catch (err) {
    console.log(err.Error);
}