// URL:
// Difficulty: Easy
// Time Complexity: O(N) or Linear Time Complexity
// Space Complexity:

function isPalindrome(x) {
    let start = 0;
    x = x.toString();
    let end = x.length - 1;
    if(x.length % 2 === 0) {
        while(start < end) {
            if(x[start] !== x[end]) {
                return false;
            } else {
                start += 1;
                end -= 1;
            }
        }
    } else {
        while(start <= end) {
            if(x[start] !== x[end]) {
                return false;
            } else {
                start += 1;
                end -= 1;
            }
        }
    }
    return true;
}


// let x = 353;
// console.log(isPalindrome(x));

// console.log(34566543 % 10);
// console.log(34566543 / 10);
// console.log(3456654 % 10);
// console.log(3456654 / 10);

let x = {
    age: 28,
    sex: "male"
}

let y = {
    age: 28,
    sex: "male"
}

let z = y;

console.log(x == y);
console.log(z == y);
console.log(x === z);

let arr = [1,2,3];


