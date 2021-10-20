// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-parentheses/
// Time Complexity: O(N) or Linear Time Complexity


class Stack {
    constructor() {
        console.log("Constructor Invoked");
        this.arr = [];
        this.pos = 0;
    }

    getSize() {
        return this.pos;
    }

    push(val) {
        this.arr[this.pos] = val;
        this.pos++;
    }

    pop() {
        let val = this.arr[this.pos - 1];
        this.arr = this.arr.splice(0, this.arr.length - 1);
        this.pos--;
        return val;
    }

    printStack() {
        let str = "";
        for(let i = 0; i < this.pos; i++) {
            str += this.arr[i];
        }
        return str;
    }
}

var isValid = function(s) {

    let myStack = new Stack();
    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(letter === "(" || letter === "{" || letter === "[")
            myStack.push(letter);
        else if(letter === ")" || letter === "]" || letter === "}") {
            let last = myStack.pop();
            if(letter === ")" && last === "(") {
                continue;
            } else if(letter === "]" && last === "[") {
                continue;
            } else if(letter === "}" && last === "{") {
                continue;
            } else {
                return false;
            }
        }
    }
    if(myStack.arr.length === 0) {
        return true;
    }
    return false;
};

let x = "(())";
console.log(isValid(x));