// URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Difficulty: Easy
// Brute Force Time Complexity: O(N^2) or Quadratic Time Complexity
// Brute ForceSpace Complexity: O(1)
// Elegant Time Complexity: O(N) or Linear Time Complexity (Single Pass)
// Elegant Space Complexity: O(1) or Constant Space Complexity (only two variables used)

// Brute Force Method
var maxProfit_BruteForce = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let temp_sum = prices[j] - prices[i];
            if(temp_sum > profit) {
                profit = temp_sum;
            }
        }
    }
    return profit;
};

var maxProfit_Elegant = function(prices) {
    let min_price = Math.max(...prices);
    let max_profit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min_price) {
            min_price = prices[i];
        } else if(prices[i] - min_price > max_profit) {
            max_profit = prices[i] - min_price;
        }
    }
    return max_profit
};


let prices = [7,1,5,3,6,4];
console.log(maxProfit_Elegant(prices));