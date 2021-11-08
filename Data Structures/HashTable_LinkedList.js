class HashTable {
    constructor(_size = 997) {
        this.arr = new Array(_size);
        this.numItems = 0;
        this.loadFactor = this.numItems / this.arr.length; // 80 % then increase the size of the array
        for(let i = 0; i < this.arr.length; i++) {
            this.arr[i] = null;
        }
    }

    computeHash(_key, _length) {
        let hash = 5381;
        for(let i = 0; i < _key.length; i++)
            hash += 13 * hash + _key.charCodeAt(i);
        return hash % _length;
    }

    calcLoadFactor() {
        this.loadFactor = this.numItems / this.arr.length;
    }

    resizeArr() {
        const newArr = new Array(this.arr.length * 2);
        this.arr.forEach(item => {
            if(item !== null) {
                let current = item.head;
                while(current !== null) {
                    const index = this.computeHash(current.key, newArr.length);
                    if(!newArr[index]) {
                        newArr[index] = new LinkedList();
                        newArr[index].insert(current.key, current.value);
                        current = current.next;
                    } else {
                        newArr[index].insert(current.key, current.value);
                        current = current.next;
                    }
                }
            }
        })
        this.arr = newArr;
    }

    insert(_key, _value) {

        this.numItems += 1;
        this.calcLoadFactor();

        // Step 1: Check if Array Needs Resizing
        if(this.loadFactor > .8)
            this.resizeArr();

        // Step 1: Compute the Hash of Given Key
        const index = this.computeHash(_key, this.arr.length);

        // Step 3: Create the LinkedList Object
        let ll = this.arr[index];

        // Step 4: Check if Bucket already Exists in Table
        if(ll === null || ll === undefined) {
            console.log("Created new LinkedList!");
            this.arr[index] = new LinkedList();
            return this.arr[index].insert(_key, _value);
        }
        // Step 5: If the Bucket Exists then Add New Node to LinkedList
        else {
            console.log("Inserting Node into Existing List!")
            let current = this.arr[index].getHead();
            while(current !== null) {
                if(current.key === _key) {
                    return false;
                }
                current = current.next;
            }
            return ll.insert(_key, _value);
        }
    }

    search(_key) {
        // Step 1: Compute the Hash of the Key
        let index = this.computeHash(_key, this.arr.length);

        // Step 2: Check if the Bucket is Empty
        if(this.arr[index] === null)
            return false;

        // Step 3: Grab the Linked List at the Specified Table Index
        let current = this.arr[index].head;

        // Step 4: Iterate through the List to Search for the Key
        while(current !== null) {
            if(current.key === _key) {
                return current.data;
            } else {
                current = current.next;
            }
        }
        // Step 5: If KVP not found in LinkedList return false
        return false;
    }

    remove(_key) {
        // Step 1: Calculate the Hash
        let index = this.computeHash(_key, this.arr.length);

        // Step 2: Check if the Bucket Exists at this Index in Table
        if(this.arr[index] === null) {
            return false;
        } else {
            return this.arr[index] = null;
        }
    }
}

class Node {
    constructor(_key, _value, _next= null) {
        this.key = _key;
        this.value = _value;
        this.next = _next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(_key, _value) {
        let temp = new Node(_key, _value, this.head);
        this.head = temp;
    }

    getHead() {
        return this.head;
    }
}





