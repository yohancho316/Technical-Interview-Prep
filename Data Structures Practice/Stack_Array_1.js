class Stack_Arrays {
    // Constructor
    constructor() {
        this.arr = [];
        this.current_pos = 0;
    }

    // Push Method
    push(_val) {
        this.arr[this.current_pos] = _val;
        this.current_pos += 1;
    }

    // Pop Method
    pop() {
        if(this.isEmpty()) {
            console.log("Stack is Empty");
            return null;
        } else {
            let val = this.arr[this.current_pos - 1];
            this.current_pos -= 1;
            return val;
        }
    }

    peek() {
        if(this.isEmpty()) {
            console.log("Stack is Empty");
            return null;
        } else {
            return this.arr[this.current_pos - 1];
        }
    }

    // Check Empty
    isEmpty() {
        return this.arr.length === 0;
    }
}

let stack1 = new Stack_Arrays();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);

console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());


class Node {
    constructor(_value, _next = null) {
        this.value = _value;
        this.next = _next;
    }
}

class Stack_LinkedLists {

    // constructor
    constructor() {
        this.head = null;
    }

    push(_value, _next) {
        let tempNode = new Node(_value, this.head);
        this.head = tempNode;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack is Empty");
            return null;
        } else {
            let val = this.head.value;
            this.head = this.head.next;
            return val;
        }
    }

    peek() {
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }
}

let stack2 = new Stack_LinkedLists();
stack2.push(60);
stack2.push(70);
stack2.push(80);
stack2.push(90);
stack2.push(100);

console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());