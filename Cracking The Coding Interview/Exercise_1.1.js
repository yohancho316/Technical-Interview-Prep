/*
    Directions: Implement an algorithm to determine if a string has all unique characters. What if you cannot use
                additional data structures?
*/

// Approach # 1: Brute Force / Naive Method
// Time Complexity: O(N^2) or Quadratic Time Complexity
function isUnique1(str) {
    for(let i = 0; i < str.length; i++) {
        let current = str[i];
        for(let j = 0; j < str.length; j++) {
            if(current === str[j] && i !== j) {
                return false;
            }
        }
    }
    return true;
}

// Approach # 2: Using Hash Table
// Time Complexity: O(N) or Linear Time Complexity
function isUnique2(str) {
    let dict = {};
    for(let i = 0; i < str.length; i++) {
        if(dict[str[i]]) {
            return false;
        } else {
            dict[str[i]] = true;
        }
    }
    return true;
}

// Approach # 3: If the character is part of the ASCII character set
// Time Complexity: O(N) or Linear Time Complexity
function isUnique3(str) {

    // Check if the Length of String Exceeds 128 characters.
    // ASCII only has a maximum of 128 unique characters
    if(str.length > 128) {
        return false;
    }

    let arr = new Array(128);

    for(let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i);
        if(arr[index] !== undefined) {
            return false;
        } else {
            arr[index] = true;
        }
    }
    return true;
}

// Approach # 4: If the character is part of the Unicode UTF-8 character set
// Time Complexity: O(N) or Linear Time Complexity
function isUnique4(str) {

    // Check if the Length of String Exceeds 65,536 characters.
    // ASCII only has a maximum of 65,536 or 2^16 unique characters
    if(str.length > 65536) {
        return false;
    }

    let arr = new Array(65536);

    for(let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i);
        if(arr[index] !== undefined) {
            return false;
        } else {
            arr[index] = true;
        }
    }
    return true;
}

// Testing
let str1 = "abcdefg";
console.log(isUnique4(str1));
