/*
    Algorithm
    Input: String variable argument
    Output: boolean value true / false

    1. Cast the string argument to lowercase since the string can be case insensitive
    2. Create an array of length 26 elements
    3. Iterate through each character in the string argument.
    4. Check if the letter is an alphabet character
    4. Find the Unicode value of each character in the string argument and perform modulo division by length of empty array
    5. Insert in the list at the index position the value of true.
    6. Iterate through the list of the array. If the contents of any element in the array is undefined, return false.
    7. Else return true
 */

// URL: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// Difficulty: 6-Kyu
// Time Complexity: O(N)
// Space Complexity: O(N)

function isPangram(string){
    let convertedStr = string.toLowerCase();
    let boolArr = new Array(26);

    for(let i = 0; i <convertedStr.length; i++) {
        if(convertedStr[i] >= 'a' && convertedStr[i] <= 'z') {
            let index = convertedStr[i].charCodeAt(0) % boolArr.length;
            boolArr[index] = true;
        }
    }

    for(let j = 0; j < boolArr.length; j++) {
        if(boolArr[j] === undefined) {
            return false;
        }
    }

    return true;
}

let str = "The quick brown fox jumps over the lazy dog.";
let str2 = "This is not a pangram.";
console.log(isPangram(str2));
