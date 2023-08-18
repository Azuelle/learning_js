// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (prop in obj)
        if (typeof obj[prop] == "number") obj[prop] *= 2;
}

multiplyNumeric(menu);

// after the call
console.log(menu.width + ", " + menu.height + ", " + menu.title);
