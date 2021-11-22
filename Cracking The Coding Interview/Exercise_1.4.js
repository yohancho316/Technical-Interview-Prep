/* Directions: Given a string, write a function to check if it is a permutation of a palindrome.
               A palindrome is a word or phrase that is the same forwards and backwards. A permutation
               is a rearrangement of letters. The palindrome does not need to be limited to just
               dictionary words. You cna ignore casing and non-letter characters.
 */

// Exercise 1.4
// Time Complexity:
// Space Complexity:


function isValidPalindromePermutation(str) {
    let real_length = 0;
    let odd_occurrences = 0;

    let ht = new HashTable();

    let lower_str = str.toLowerCase();

    for(let i = 0; i < lower_str.length; i++) {
        if(lower_str[i] >= 'a' && lower_str[i] <= 'z') {
            real_length += 1;
            let key = lower_str[i];
            const index = ht.computeHash(key);
            if(ht.arr[index]) {
                ht[index] += 1;
            } else {
                ht.insert(lower_str[i], 1);
            }
        }
    }

    for(let i = 0; i < ht.keys.length; i++) {
        const key = ht.keys[i];
        const occurs = ht.search(key);
        if(!(occurs % 2 === 0)){
            odd_occurrences += 1;
        }
    }

    if((real_length % 2 === 0) && (odd_occurrences > 0)) return false;
    if(real_length % 2 !== 0 && (odd_occurrences >= 2)) return false;
    return true;
}

let str = "mom";
console.log(isValidPalindromePermutation(str));

/*

    let odd_occurences = 0;
    let ht = {};
    x = x.toString();

    for(let i = 0; i < x.length; i++) {
        let current = x[i];
        if(!ht[current]) {
            ht[current] = 1;
        } else {
            ht[current] += 1;
        }
    }

    console.log(ht);

    for(let key in ht) {
        let occurs = ht[key];
        if(occurs % 2 !== 0) {
            odd_occurences += 1;
        }
    }

    if(x.length % 2 === 0 && odd_occurences > 0) return false;
    if(x.length % 2 !== 0 && odd_occurences > 1) return false;
    return true;
 */

