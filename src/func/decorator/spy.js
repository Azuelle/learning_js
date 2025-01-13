// CODE STARTS HERE

function spy(func) {
    return function wrapper(...args) {
        if (!wrapper.calls) wrapper.calls = [];
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
}

// CODE ENDS HERE

function work(a, b) {
    console.log(a + b); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}