function unique(arr = [""]) {
    return arr.reduce((uniques, current) => {
        if (!uniques.includes(current))
            uniques.push(current);
        return uniques;
    }, [])

    /* Better performance:

    return Array.from(new Set(arr));
    
    */
}

let strings = [
    "owo", "owo", "wow", "uwu", "awa",
    "owo", "owo", "owo", "uwu", "osu",
];

console.log(unique(strings));
