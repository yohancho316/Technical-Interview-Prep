// URL: https://www.codewars.com/kata/554ca54ffa7d91b236000023
// Difficulty: 6-Kyu
// Time Complexity: O(N) or Linear Time Complexity

function deleteNth(arr,n){
    let dict = {};
    let returnArr = [];
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i].toString();
        if(current in dict) {
            dict[current] += 1;
            if(dict[current] <= n) {
                returnArr.push(arr[i]);
            }
        } else {
            dict[current] = 1;
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}

let arr = [1,2,3,1,2,1,2,3];
console.log(deleteNth(arr,2));

