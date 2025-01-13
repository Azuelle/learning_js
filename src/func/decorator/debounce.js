// CODE STARTS HERE

function debounce(f, ms) {
    return function wrapper(...args) {
        if (wrapper.timer) clearTimeout(wrapper.timer);
        wrapper.timer = setTimeout(() => f.apply(this, args), ms);
    }
}

// CODE ENDS HERE

let f = debounce(console.log, 1000);

f("a"); console.log("f('a') called");
setTimeout(() => { f("b"); console.log("f('b') called"); }, 200);
setTimeout(() => { f("c"); console.log("f('c') called"); }, 500);
// debounced function waits 1000ms after the last call and then runs: console.log("c")
setTimeout(() => console.log("1000ms after last call"), 1500);
