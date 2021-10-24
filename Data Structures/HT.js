// Hash Table Using Chaining (LinkedLists)
class HashTable {

    // Constructor Method
    constructor(_size) {
        this.arr = [];
        this.size = _size;
    }

    // Check if Hash Table is EMpty
    isEmpty() {
        return this.size === 0;
    }

    // Clear and Reset Member Attributes
    clear() {
        this.arr = [];
        this.size = 0;
    }

    // Computes the Hash of a Given Key Argument
    computeHash(key) {
        let hashSum = 5381; // prime numbers help to reduce collisions
        for(let i = 0; i < key.length; i++) {
            hashSum += hashSum * 33 + key.charCodeAt(i);
        }
        return hashSum % this.size;
    }

    // Insert KVP into Hash Table Method
    insert(key, value) {

        // Step 1: Compute the Hash Code of Given Key
        let index = this.computeHash(key);

        // Check if List Already Contains a Node with the Given Key
        if(this.arr[index] === undefined) {
            this.table[index] = new LinkedList();
        }

    }
}



