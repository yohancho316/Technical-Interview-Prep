class Node {
    constructor(_data, _next=null) {
        this.data = _data;
        this.next = _next;
    }
}

class Stack {

    constructor() {
        this.head = null;
    }

    push(_data) {
        let temp = new Node(_data,this.head);
        this.head = temp;
    }

    pop() {
        if(this.isEmpty())
            return null;
        let current = this.head;
        this.head = this.head.next;
        return current.data;
    }

    peek() {
        if(this.isEmpty())
            return null
        return this.head.data;
    }

    isEmpty() {
        return this.head === null;
    }
}