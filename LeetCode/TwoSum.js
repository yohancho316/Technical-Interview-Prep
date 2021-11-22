/*
URL: https://leetcode.com/problems/two-sum/
Difficulty: Easy
Time Complexity: O(N) or Linear Time Complexity
Space Complexity: O(N) or Linear Space Complexity
 */

var twoSum = function(nums, target) {

    let hash_set = new Set();

    for(let i = 0; i < nums.length; i++) {
        hash_set.add(nums[i]);
    }

    for(let j = 0; j < nums.length; j++) {
        let diff = target - nums[j];
        if (hash_set.has(diff) && j !== nums.indexOf(diff)) {
            return [j, nums.indexOf(diff)];
        }
    }
};

let nums = [2,7,11,15];
console.log(twoSum(nums, 9));