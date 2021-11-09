class Stack {
    constructor() {
        this.stack = [];
        this.currentPos = 0;
    }

    push(symbol) {
        this.stack[this.currentPos] = symbol;
        this.currentPos += 1;
    }

    pop() {
        let symbol = this.stack[this.currentPos - 1];
        this.currentPos -= 1;
        return symbol;
    }
}

function groupCheck(s){
    let myStack = new Stack();
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            myStack.push(s[i]);
        } else {
            if(myStack.currentPos === 0) {
                return false;
            }
            let opening = myStack.pop();
            if(s[i] === ")" && opening !== "(") {
                return false;
            } else if(s[i] === "}" && opening !== "{") {
                return false;
            } else if(s[i] === "]" && opening !== "[") {
                return false;
            }
        }
    }
    if(myStack.currentPos !== 0) {
        return false;
    }
    return true;
}


let pattern1 = "({})";
let pattern2 = "[[]()]";
let pattern3 = "[{()}]";




let incorrect1 = "{(})";
let incorrect2 = "([]";
let incorrect3 = "[])";

console.log(groupCheck(pattern1));
console.log(groupCheck(pattern2));
console.log(groupCheck(pattern3));

console.log(groupCheck(incorrect1));
console.log(groupCheck(incorrect2));
console.log(groupCheck(incorrect3));