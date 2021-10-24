/*
Q1. What is a LinkedList Data Structure?
    A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
    The elements in a linked list are linked using pointers. A linked list consists of nodes where each node contains
    data fields and a reference (link) to the next node in the list.

Q2. What are the Different Types of LInked Lists?
    1. Singly Linked Lists   - Forward navigation of nodes only possible
    2. Doubly Linked Lists   - Forward and backwards navigation of nodes possible
    3. Circular Linked Lists - Last node contains link of the first element as next and the first node has a link to the last node as previous

Q3. What are the Basic Operations Supported by a Linked List?
    Insertion() - Adds an Node at the Beginning of the List
    Deletion()  - Deletes a Node at the Beginning of the List
    Display()   - Displays the Complete Linked list
    Search()    - Searches the nodes for an element using a given key
    Delete()    - Deletes a specific node using a given key

Q4. What are the Basic Operations Supported by the Node Class?
    SetValue()  => Sets the value stored at the current node
    GetValue()  => Retrieves the value stored at the current node
    SetNext()   => Sets the address for the next node pointed to by the current node
    HasNext()   => Checks if the next node is not null (end of list)

Q5. What are the Steps to Insert a Node in the LinkedList Data Structure?
    Step 1: Create a new node with the provided data
    Step 2: Point the new node to the current head node as "next".
    Step 3: Set the new node as the new "head" node.

Q6. What are the Steps to Delete a Node in the LinkedList Data Structure?
    Step 1: Get the next node pointed to by the second node in the LinkedList after the head node.
    Step 2: Set the head node to point to this node circumventing the node in between the head and the third node

Q7. What are the Steps to Navigate through the Entire LinkedList Data Structure?
    Step 1: Get the Node pointed at by the Head Node
    Step 2: Point each Node to the Next by the "next" property until you reach null (end of Linked List)

Q8. What are the Contents of Each Node in a LinkedList Data Structure?
    Each node consists of data values and the address of the next node in the LinkedLists.

Q9. What is the Worst Case Time Complexity of a LinkedList Data Structure?
    Search()        =>      O(N) or Linear Time
    Insertion()     =>      O(1) or Constant Time
    Deletion()      =>      O(1) or Constant Time

Q10. What is the Average Case Time Complexity of a LinkedList Data Structure?
    Search()        =>      O(N) or Linear Time
    Insertion()     =>      O(1) or Constant Time
    Deletion()      =>      O(1) or Constant Time
 */

// Node Class
class LinkedListNode {

    // Constructor
    constructor(_data, _next= null) {
        this.data = _data;
        this.next = _next;
    }

    // Get Node Object Data
    getData() {
        return this.data;
    }

    // Get Reference to Next Node Object (Address)
    getNext() {
        return this.next;
    }

    // Set the Data of the Current Node
    setData(_data) {
        this.data = _data;
    }

    // Set the Reference to the Next Node
    setNext(_next) {
        this.next = _next;
    }

    // Check if Next Node Exists
    hasNext() {
        return this.next === null;
    }
}

// Singly Linked Lists Class
class SinglyLinkedList {

    // SinglyLinkedList Constructor Method
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Check if the LinkedList is Empty
    isEmpty() {
        return this.head === null;
    }

    // Get Size Method
    getSize() {
        return this.size;
    }

    // Get Head Method
    getHead() {
        return this.head;
    }

    // Clear Method
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Insert Node at Front of LinkedList
    insertFirst(_data) {
        let temp_node = new LinkedListNode(_data, this.head);
        this.head = temp_node;
        this.size += 1;
    }

    // Insert Node at End of LinkedList
    insertLast(_data) {

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            this.insertFirst(_data);
        }

        let current = this.head;
        let temp_node = new LinkedListNode(_data);

        while(!current.hasNext()) {
            current = current.getNext();
        }
        current.setNext(temp_node);
        this.size += 1;
    }

    // Remove Head Node Method
    removeFirst() {

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return null;
        }

        // Set Head Next to Point to Following Node
        this.head = this.head.getNext();
        this.size -= 1;
    }

    // Remove Last Node Method
    removeLast() {

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return null;
        }

        let previous = null;
        let current = this.head;
        while(current.hasNext()){
            previous = current;
            current = current.getNext();
        }

        if(previous === null) {
            this.removeFirst();
        } else {
            previous.setNext(null);
            this.count -= 1;
        }
    }

    // Insert at Specific Position
    insertAt(position, _data) {

        // Check if Position is Within Bounds
        if(position < 0 || position >= this.size) {
            return "Position is Out of Bounds";
        }

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return "LinkedList is Empty!";
        }

        // Check if Position to Insert is at Head
        if(position === 0) {
            return this.insertFirst(_data);
        }

        // Iterate to Node One Position Away
        let currentPosition = 0;
        let previousNode = this.head;
        while(currentPosition < position - 1) {
            currentPosition += 1;
            previousNode = previousNode.getNext();
        }

        // Set Previous Node to Point to New Node
        // New Node Should Point to Previous.getNext() Node
        let temp_node = new LinkedListNode(_data, previousNode.getNext());
        previousNode.setNext(temp_node);
        this.size += 1;
    }

    // Remove at Specific Position
    removeAt(position) {

        // Check if Position is Out of Bounds
        if(position < 0 || position >= this.size) {
            return "Position is Out of Bounds";
        }

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return "LinkedList is Empty";
        }

        // Iterate to Node One Position Away from Target Node
        let currentPos = 0;
        let previousNode = this.head;
        while(currentPos < position - 1) {
            currentPos += 1;
            previousNode = previousNode.getNext();
        }

        previousNode.next = previousNode.getNext().getNext();
        this.size -= 1;
    }

    // Find Specific Node
    find(_value) {

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return "LinkedList is Empty";
        }

        let current = this.head;
        while(current) {
            if(current.getData() === _value) {
                return true;
            } else {
                current = current.getNext();
            }
        }
        return false;
    }

    // toString Method
    toString() {

        // Check if LinkedList is Empty
        if(this.isEmpty()) {
            return "LinkedList is Empty";
        }

        let returnStr = "";
        let current = this.head;
        while(current) {
            returnStr += current.getData() + " ";
            current = current.getNext();
        }
        return returnStr.slice(0, returnStr.length - 1);
    }
}



