function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // create a shooter function,
            console.log(j); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
