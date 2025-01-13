let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(lower, upper) {  // both ends inclusive
    return function (e) {
        return lower <= e && upper >= e;
    }
}

function inArray(array) {
    return function (e) {
        return array.includes(e);
    }
}

console.log("inBetween(3, 6) = " + arr.filter(inBetween(3, 6)))
console.log("inArray([1, 2, 3, 10]) = " + arr.filter(inArray([1, 2, 3, 10])))
