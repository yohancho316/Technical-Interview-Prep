// URL: https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// Difficulty: 6-Kyu
// Time Complexity: O(N^2) or Quadratic Time Complexity

function inArray(array1,array2){
    let returnArr = [];
    for(let i = 0; i < array1.length; i++) {
        let current = array1[i];
        for(let j = 0; j < array2.length; j++) {
            if(array2[j].includes(current) && !returnArr.includes(current)) {
                returnArr.push(current);
            }
        }
    }
    return returnArr.sort();
}

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));