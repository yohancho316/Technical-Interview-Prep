/* URL: https://leetcode.com/problems/min-stack/
Difficulty: Easy
Brute Force Time Complexity: O(N) or Linear Time
Brute Force Space Complexity: O(1) or Constant Time
Eloquent Time Complexity: O(1) or Constant Time
Eloquent Space Complexity: O(1) or Constant Time
*/


// Brute Force Method
class MinStack_BruteForce {

    constructor() {
        this.arr = [];
        this.currentPos = 0;
        this.minNumber = undefined;
    }

    push(val) {
        if(this.minNumber === undefined) {
            this.minNumber = val;
        }

        this.arr[this.currentPos] = val;
        this.currentPos += 1;

        if(val < this.minNumber) {
            this.minNumber = val;
        }
    }

    pop() {
        let returnVal = this.arr[this.currentPos - 1];
        this.arr.pop();
        this.currentPos -= 1;
        this.minNumber = Math.min(...this.arr);
        return returnVal;
    }

    top() {
        return this.arr[this.currentPos - 1];
    }

    getMin() {
        return this.minNumber;
    }
};

// Eloquent Method
class MinStack_Eloquent {

    constructor() {
        this.arr = [];
    }

    push(val) {
        if(this.arr.length === 0) {
            this.arr.push([val, val]);
        }
        const minNumber = this.arr[this.arr.length - 1][1];
        this.arr.push([val,Math.min(val, minNumber)]);
    }

    pop() {
        return this.arr.pop();
    }

    top() {
        return this.arr[this.arr.length - 1][0];
    }

    getMin() {
        return this.arr[this.arr.length - 1][1];
    }


};

let myStack = new MinStack_Eloquent();
myStack.push(10);
myStack.push(20);
myStack.push(-10);
myStack.push(0);
myStack.push(-20);

console.log(myStack.getMin())

console.log(myStack.pop());

console.log(myStack.getMin())

