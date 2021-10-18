// Difficulty: 6-Kyu
// Link: https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
// Time Complexity: O(N) or Linear Time Complexity

function tribonacci(signature, n){
    if(n === 0) {
        return []; // O(1)
    } else if(n <= signature.length) {
        return signature.splice(0, n); // O(1)
    } else {
        for(let i = signature.length; i < n; i++) {
            let sum = signature[i - 3] + signature[i - 2] + signature[i - 1];
            signature.push(sum);
            // O(N)
        }
    }
    return signature;
}

let signature = [1,2,3];
console.log(tribonacci(signature, 4));
