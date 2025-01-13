function printNumbersInterval(from, to) {
    let i = from;
    console.log(i);
    let timer = setInterval(() => {
        console.log(++i);
        if (i == to) clearInterval(timer);
    }, 1000);
}

printNumbersInterval(5, 10)

function printNumbersNestedTimeout(from, to) {
    let i = from;
    console.log(i);
    setTimeout(function inc() {
        console.log(++i);
        if (i < to) setTimeout(inc, 1000);
    }, 1000);
}

printNumbersNestedTimeout(5, 10);