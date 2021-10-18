// Difficulty: 6-Kyu
// Link:
// Time Complexity: O(N) or Linear Time


function digPow(n, p){

    let str = n.toString();
    let sum = 0;

    for(let i = 0, exp = p; i < str.length; i++) {
        console.log("current val: " + parseInt(str[i]))
        console.log("new sum: " + Math.pow(parseInt(str[i]),exp));

        sum += Math.pow(parseInt(str[i]),exp);
        ++exp;
    }
    console.log("Sum = " + sum);
    console.log("N * P = " + n * p);

    if((sum % n) == 0) {
        return sum/n;
    }

    return -1;
}

let n = 46288;
let p = 3;
console.log(digPow(n,p));