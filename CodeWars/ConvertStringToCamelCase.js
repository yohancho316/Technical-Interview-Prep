// Difficulty: 6-Kyu
// Link:
// Time Complexity:
// Notes: We can re-use this exercise to practice regular expression parsing

function toCamelCase(str){

    let parsedStr = str.replace(/-|_/g, " ").split(" ");
    let returnStr = parsedStr[0];

    for(let i = 1; i < parsedStr.length; i++) {
        let current = parsedStr[i];
        returnStr += current[0].toUpperCase() + current.slice(1);
    }
    return returnStr;
}

let str = "the_stealth_warrior";
console.log("Original: " + str);
let parsed = toCamelCase(str);
console.log("Parsed: " + parsed);


