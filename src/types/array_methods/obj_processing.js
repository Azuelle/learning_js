let john = { name: "John", age: 25, surname: "Smith", id: 1 };
let pete = { name: "Pete", age: 30, surname: "Smith", id: 1 };
let mary = { name: "Mary", age: 29, surname: "Key", id: 3 };

let users = [john, pete, mary];


console.log("=== Map to names ===");
let userNames = users.map(user => user.name);
console.log(userNames);


console.log("=== Map to objects ===");
let usersMapped = users.map(user => ({
    fullName: user.name + " " + user.surname,
    id: user.id
}));
console.log(usersMapped[0].id, usersMapped[0].fullName);

console.log("=== Sort by age ===");
let arr = users.slice();
function sortByAge(arr = []) {
    return arr.sort((a, b) => a.age - b.age);
}
sortByAge(arr);
for (let user of arr)
    console.log(user.name);


console.log("=== Get average age ===");
function getAverageAge(arr = []) {
    return arr.reduce((ageSum, user) => ageSum + user.age, 0) / arr.length;
}
console.log(getAverageAge(users));


console.log("=== Create keyed object from array ===")
let newUsers = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(users = []) {
    return users.reduce((grouped, current) => {
        grouped[current.id] = current;
        return grouped;
    }, {});
}

let usersById = groupById(newUsers);
// INSPECT BY ADDING BREAKPOINT HERE
console.log(Object.keys(usersById));
