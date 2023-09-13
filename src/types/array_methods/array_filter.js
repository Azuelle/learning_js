// Filter range
console.log("=== filterRange ===");

function filterRange(arr, a, b) {
    let result = [];
    for (ele of arr)
        if (a <= ele && b >= ele)
            result.push(ele);
    return ele;
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));
console.log("Original: " + arr);

// Filter range in place
console.log("=== filterRangeInPlace ===");

function filterRangeInPlace(arr = [], a, b) {
    for (let i = 0; i < arr.length; i++)
        if (a >= arr[i] || arr[i] >= b)
            arr.splice(i, 1);
    return arr;
}

filterRangeInPlace(arr, 1, 4)
console.log(arr);
