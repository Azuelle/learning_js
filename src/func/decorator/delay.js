// CODE STARTS HERE

function delay(f, ms) {
    let call = (ctx, args) => {
        f.apply(ctx, args);
    }
    return function (...args) {
        setTimeout(call, ms, this, args);
    }
}
// CODE ENDS HERE

function f(x) {
    console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms