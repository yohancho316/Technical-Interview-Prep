// Exercise 1.2 from Cracking the Coding Interview
// Directions: Given two strings, write a method to decide if one is a permutation of the other
// Time Complexity: O(N) or Linear Time Complexity where N is the length of the given strings

function isPermutation(str1, str2) {
    if(!(str1.length === str2.length)) {
        return false;
    }

    let dict1 = {};
    let dict2 = {};

    for(let i = 0; i < str1.length; i++) {
        if(str1[i] in dict1) {
            str1[i] += 1;
        } else {
            dict1[str1[i]] = 1;
        }
    }

    for(let j = 0; j < str2.length; j++) {
        if(str2[j] in dict2) {
            dict2[str2[j]] += 1;
        } else {
            dict2[str2[j]] = 1;
        }
    }

    for(let key in dict1) {
        if(key in dict2 && dict1[key] === dict2[key]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let str1 = "dog";
let str2 = "god";
console.log(isPermutation(str1, str2));