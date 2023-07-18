function bar(arg) {
    return arg + 1;
}

function foo(arg1 = "hi", arg2 = bar(arg3), arg3 = 0) {
    alert(arg1);
    return arg2 + arg3;
}

alert(foo("hi", 1, 1));
alert(foo());   // Error