// URL: https://leetcode.com/problems/search-insert-position/
// Difficulty: Easy
// Time Complexity: O(LOG N) Time Complexity or Logarithmic Time Complexity
// Space Complexity: O(1)

function searchInsert(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        else if(target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return left;
}

let nums = [1,3,5,6];
let target = 7;
console.log(searchInsert(nums, target));