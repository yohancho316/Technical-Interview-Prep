class Node {
    constructor(_key, _val, _next = null) {
        this.key = _key;
        this.val = _val;
        this.next = _next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(_key) {
        let tempNode = new Node(_key, _key, this.head);
        this.head = tempNode;
    }
}

class HashTable {

    constructor() {
        this.arr = new Array(997);
        for(let i = 0; i < this.arr.length; i++) {
            this.arr[i] = null;
        }
    }

    insertKVP(_val) {
        // Convert the Integer Value to String
        let stringVal = _val.toString();
        let index = this.computeHash(stringVal);
        let ll = this.arr[index];

        // If there is NO linked list already existing at this hashed index create new linked list
        if(ll === null) {
            let newLinkedList = new LinkedList();
            newLinkedList.insert(_val);
        } else {
            ll.insert(_val);
        }
    }

    computeHash(_val) {
        let hash = 5381;
        for(let i = 0; i < _val.length; i++) {
            hash += 13 * hash + _val.charCodeAt(i);
        }
        return hash % this.arr.length;
    }
}

function checkNums(target, comparison, nums) {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] == target && i !== comparison) {
            return i;
        }
    }
    return false;
}

function twoSum (nums, target) {

    // Create the Hash Table
    let myHashTable = new HashTable();

    // Iterate through nums & insert each integer into the Hash Table
    for(let i = 0; i < nums.length; i++) {
        myHashTable.insertKVP(nums[i]);
    }

    // Iterate through nums & search for the difference / sum to get target values
    for(let j = 0; j < nums.length; j++) {
        let difference = target - nums[j];
        let index = myHashTable.computeHash(difference);
        if(myHashTable[index] !== null) {
            let secondIndex = checkNums(difference, j, nums);
            if(secondIndex) {
                return [j,secondIndex];
            }
        }
    }
    return false;
}

console.log(twoSum([3,2,4], 6));
