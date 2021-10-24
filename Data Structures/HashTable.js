/*
Q1. What is a Hash Table?
    A hash table is a data structure used to store key-value pairs that can be accessed in constant time.
    In a hash table, data is stored in an array format where each data value has its own unique index value.

Q2. Why use a Hash Table?
    A hash table can be used to solve problems where you need to keep track of different variables without writing
    them explicitly.

    For example, if you are asked to keep track of how many times a certain letter / word occurs in a string.
    The naive approach is to use two nested looks to compare each letter against the rest one by one.
    Although this solution works, it takes N^2 operations to complete, where N is equal to the size of the array.

Q3. How do you Compute the Hash of a Given Key?
    We iterate through each character of the string key and and add its unicode char value to sum.
    We find the index by performing modulus division on the sum of unicode values by the length of the array.
    The value returned will always be the same index returned when passing in this key.

Q4. How do you Retrieve Values in the Hash Table?
    After computing the hash of a given key, we can insert or retrieve data stored in the hash table data structure at
    specified hashed index.

Q5. What is the Drawback from using Hash Tables?
    There is a possibility for collisions as different, unique keys may still result in the same index.
    A fix for this is to implement chaining by inserting a Linked List inside each index of our array within the hash table constructor.
    Another solution is to implement Double Hashing

Q6. What are the Basic Operations Performed on a Hash Table?
    Search - Searches an element in a hash table
    Insert - Inserts an element in a hash table
    Delete - Deletes an Element from a Hash Table

Q7. What is the Worst Case Time Complexity
    The worse-case complexity of a hash table is the same as that of a linked list: O(N) for insert, lookup, and remove.
    If we're unlucky with the keys we encounter, or if we have a poorly implemented hash function, all keys may hash to
    the same bucket.

Q8. What is the Time Complexity of Hash Table Operations?
    Insertion   =>  O(1) or Constant Time
    Look Up     =>  O(1) or Constant Time
    Removal     =>  O(1) or Constant Time
    Search      =>  O(N) or Linear Time

 */

// Hash Table Implementation without Linked List
class HashTable {

    // Constructor Method
    constructor(_size) {
        this.size = _size;
        this.table = [];
    }

    // Compute Hash from Key Method
    compute_hash_code(key) {
        let sum = 0;
        for(let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i) * 100;
        }
        return (sum % this.size);
    }

    // Insert Value at Key
    insert(key, value) {
        let index = this.compute_hash_code(key);
        this.table[index] = value;
    }

    // Get Value from Hash Table
    get(key) {
        let index = this.compute_hash_code(key);
        let value = this.index[value];

        if(value) {
            return value;
        } else {
            return undefined;
        }
    }

}

