var maxSubArray_naive = function(nums) {
    // Time Complexity: O(N^2) or Quadratic Time Complexity
    let max = -Infinity;
    let tempSum = 0;
    for(let i = 0; i < arr.length; i++) {
        let tempSum = arr[i];
        if(tempSum > max) max = tempSum;
        for(let j = i + 1; j < arr.length; j++) {
            tempSum += arr[j];
            if(tempSum > max) max = tempSum;
        }
    }
    return max;
};

var maxSubArray_efficient = function(nums) {
    // Time Complexity: O(N) or Linear Time
    let max = nums[0];
    let tempSum = 0;
    for(let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        if(tempSum > max) max = tempSum;
        if(tempSum < 0) tempSum = 0;
    }
    return max;
}

// Same Algorithm Works to Find the Smallest Subarray in the given Array nums
var minSubArray = function(nums) {
    // Time Complexity: O(N) or Linear Time
    let max = nums[0];
    let tempSum = 0;
    for(let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        if(tempSum < max) max = tempSum;
        if(tempSum > 0) tempSum = 0;
    }
    return max;
}


let arr = [-100,-50, -10, 20, 40, 80, -100];
console.log(minSubArray(arr));