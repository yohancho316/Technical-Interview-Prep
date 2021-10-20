// Stack Using Arrays
class Stack {
    constructor() {
        this.items = [];
        this.pos = 0;
    }

    push(val) {
        this.items[this.pos] = val;
        this.pos++;
    }

    pop() {
        if(this.pos == 0)
            return undefined;
        let returnVal = this.items[this.pos - 1];
        this.pos -= 1;
        return returnVal;
    }

    peek() {
        return this.items(this.pos - 1);
    }

}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log("Pos: " + stack.pos + " Popped Val: " + stack.pop());
console.log("Pos: " + stack.pos + " Popped Val: " + stack.pop());
console.log("Pos: " + stack.pos + " Popped Val: " + stack.pop());



