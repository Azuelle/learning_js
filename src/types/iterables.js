const prompt = require("prompt-sync")();

function range(l, r, step = 1) {
    return {
        l: l,
        r: r,
        step: step,
        [Symbol.iterator]: () => ({
            current: l,
            last: r,
            step: step,
            next() {
                if (this.current < this.last) {
                    let ret = { done: false, value: this.current };
                    this.current += this.step;
                    return ret;
                }
                else return { done: true };
            }
        })
    }
}

console.log(Array.from(range(1, 12, 2)));
