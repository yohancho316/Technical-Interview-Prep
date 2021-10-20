class Stack {

    constructor() {
        this.stack = [];
        this.pos = 0;
    }

    push(val) {
        this.stack[this.pos] = val;
        this.pos += 1;
    }

    pop() {
        if(this.pos == 0) {
            return undefined;
        }
        let returnVal = this.stack[this.pos - 1];
        this.pos -= 1;
        return returnVal;
    }
}

var isValid = function(s) {
    let myStack = new Stack();

    if(s[0] == ")" || s[0] == "]" || s[0] == "}") {
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        let current = s[i];
        if(current == "(" || current == "{" || current == "[") {
            myStack.push(s[i]);
        } else {
            let compare = myStack.pop();
            if((compare == "(" && current !== ")") ||
                (compare == "[" && current !== "]") ||
                (compare == "{" && current !== "}") ||
                (compare == undefined)) {
                return false;
            }
        }
    }
    return myStack.pos == 0;
}

let s = "([)]";
console.log(isValid(s));