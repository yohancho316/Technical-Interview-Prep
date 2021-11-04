class Stack {

    // Constructor
    constructor() {
        this.arr = new Array(100);
        this.position = 0;
    }

    // Push Operation
    push(_character) {
        this.arr[this.position] = _character;
        this.position += 1;
    }

    // Pop Operation
    pop() {
        let val = this.arr[this.position - 1];
        this.position -= 1;
        return val;
    }
}

function checkOpen(_character) {
    return _character === "{" || _character === "(" || _character === "[";
}

var isValid = function(s) {
    let myStack = new Stack();
    for(let i = 0; i < s.length; i++) {
        if(checkOpen(s[i])) {
            myStack.push(s[i]);
        } else {
            switch(s[i]) {
                case ")":
                    if(myStack.pop() === "("){
                        break;
                    } else {
                        return false;
                    }
                case "}":
                    if(myStack.pop() === "{") {
                        break;
                    } else {
                        return false;
                    }
                case "]":
                    if(myStack.pop() === "[") {
                        break;
                    } else {
                        return false;
                    }
                default:
                    return false;
            }
        }
    }
    if(myStack.position === 0) {
        return true;
    }

    return false;
};

let s = "[";
console.log(isValid(s));