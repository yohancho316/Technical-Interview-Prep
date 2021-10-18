// Difficulty: 6-Kyu
// Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// Time Complexity: O(1) or Constant Time

function createPhoneNumber(numbers){
    let areaCode = "(" + numbers[0] + numbers[1] + numbers[2] + ") ";
    let middle = "" + numbers[3] + numbers[4] + numbers[5] + "-";
    let last = "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    return areaCode.concat(middle, last);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers));