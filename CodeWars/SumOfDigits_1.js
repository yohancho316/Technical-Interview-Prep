// URL: https://www.codewars.com/kata/541c8630095125aba6000c00
// Difficulty: 6-Kyu
// Time Complexity Analysis: I think O(N) or Linear Time Complexity

function digital_root(n) {

    let n_str = n.toString();

    // Base Case
    if(n_str.length == 1) {
        return parseInt(n_str);
    } else {
        let sum = 0;
        for(let i = 0; i < n_str.length; i++) {
            sum += parseInt(n_str[i]);
        }
        // Recursive Call
        return digital_root(sum);
    }
}

let num = 942;
console.log("" + digital_root(num));