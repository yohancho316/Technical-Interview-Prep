function tribonacci(signature,n){
    if(n === 0) return [];
    else if(n === 1) return [signature[0]];
    else if(n === 2) return [signature[0], signature[1]];

    for(let i = 3; i < n; i ++) {
        signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
    }
    return signature;
}

let arr = [1,1,1];
console.log(tribonacci(arr, 10));