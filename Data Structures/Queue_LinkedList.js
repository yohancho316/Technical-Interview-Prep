class Node {
    constructor(_data) {
        this.data = _data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        // Step 1: Create a Node passing value
        let temp_node = new Node(value);

        // Step 2: Check if the queue is empty. If the queue is empty then set this.front and this.rear to point to the newly created node
        if(this.isEmpty()) {
            this.front = temp_node;
            this.rear = temp_node;
        }
        // Step 3: Else, this.rear.next refer to the newly constructed node. Afterwards, set this.rear to refer to the newly constructed node.
        else {
            this.rear.next = temp_node;
            this.rear = temp_node;
        }
    }

    dequeue() {

        if(this.isEmpty()) {
            console.log("Empty Queue");
        } else {

            // Step 1: Create a pointer that refers to the the front node
            let current = this.front;

            // Step 2: Check if the Queue is Empty
            if (!this.isEmpty()) {
                this.front = this.front.next;
            }

            // Step 3: Check if the front pointer no longer refers to any node in the queue.
            if (!this.front) {
                this.rear = null;
            }

            // Step 4: Return the pointer's value
            return current.data;
        }
    }

    isEmpty() {
        return this.front === null;
    }

    print() {
        if(this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        let current = this.front;
        let arr = [];
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}

// test
let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.print());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.dequeue();

