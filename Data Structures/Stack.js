/*
    1. What is a Stack Data Structure?
       A stack is a linear data structure whose order maybe FILO or LIFO.
       Everytime an element is added, it goes on the top of the stack and the only element
       that can be removed is the element that is at the top of the stack.

    2. What are the Three Primary Operations that are Performed in the stack?
       A. Push: Adds an item to the top of the stack.
       B. Pop: Removes an item from the stack. The items are popped in the reversed order in which
               they are pushed.
       C. Peek: Returns the top element of the stack without removing the item.
       D. isEmpty: Returns true if the stack is empty, else returns false.

    3. What is the Time Complexity for Stack Operations?
       push()    => O(1) or Constant Time
       pop()     => O(1) or Constant Time
       peek()    => O(1) or Constant Time
       isEmpty() => O(1) or Constant Time
       isFull()  => O(1) or Constant Time
       search()  => O(N) or Linear Time where N is the length of the Stack / # of Nodes

    4. What are the Two Ways to Impelement a Stack?
       There are two ways to implement a stack:
       - Using Arrays
       - Using LinkedLists

    5. What are Some Common Use-Cases for Stacks?
       The simplest application of a stack is to reverse a word.
       You push a given word to the stack - letter by letter - and then pop letters from the stack.

     6. What is the Algorithm for PUSH Operations?
        A. Check if the stack is currently fool or not (depending on the language).
        B. If the stack is full, then print error of overflow and throw an exception.
        C. If the stack is not full then insert the element.

    7. What is the Algorithm for the POP Operations?
       A. Check if the stack is empty or not.
       B. If the stack is empty, then throw an underflow exception & exit the program.
       C. If the stack is not empty, then print the element at the top and decrement the top.


 */



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



