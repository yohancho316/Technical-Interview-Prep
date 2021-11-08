// Difficulty: 6-Kyu
// URL: https://www.codewars.com/kata/54da5a58ea159efa38000836
// Time Complexity Analysis: O(N) or Linear Time Complexity

function findOdd(A) {

    let myDict = {};

    for(let i = 0; i < A.length; i++) {
        if(myDict[A[i]]) {
            myDict[A[i]] += 1;
        } else {
            myDict[A[i]] = 1;
        }
    }

    for(let key in myDict) {
        if(myDict[key] % 2 !== 0) {
            return parseInt(key);
        }
    }
}

let arr = [1,1,1,1,1,1,10,1,1,1,1];
console.log(findOdd(arr));