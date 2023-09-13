// Reverse sort
console.log("=== Reverse Sort ===");

arr = [5, 2, 1, -10, 0];
arr.sort((a, b) => b - a);
console.log(arr);

// Copy sorted
console.log("=== copySorted ===");

function copySorted(arr = []) {
    return arr.slice().sort();
}

arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log("Original: " + arr);
