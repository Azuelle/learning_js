function bar(arg) {
    return arg + 1;
}

function foo(arg1 = "hi", arg2 = bar(arg3), arg3 = 0) {
    console.log(arg1);
    return arg2 + arg3;
}

console.log(foo("hi", 1, 1));
console.log(foo());   // Error
