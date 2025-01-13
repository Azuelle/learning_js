// CODE STARTS HERE

function throttle(f, ms) {
    let last_args, last_this;
    let throttling = false;
    return function wrapper(...args) {
        if (!throttling) {
            f.apply(last_this ? last_this : this, args);
            throttling = true;
            setTimeout(() => {
                throttling = false;
                if (last_args && last_this) {
                    wrapper(...last_args);
                    last_args = undefined;
                    last_this = undefined;
                }
            }, ms);
        } else {
            last_args = args;
            last_this = this;
        }
    }
}

// CODE ENDS HERE

function f(a) {
    console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
setTimeout(() => console.log("1000ms"), 1000);
// ...outputs 3, intermediate value 2 was ignored