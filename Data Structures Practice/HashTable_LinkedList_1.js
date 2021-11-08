class Node {
    constructor(key, data, next = null) {
        this.key = key;
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, data) {
        let temp_node = new Node(key, data, this.head);
        this.head = temp_node;
    }
}

class HashTable {
    constructor() {
        this.arr = new Array(7);
        this.numItems = 0;
    }

    calcLoadFactor() {
        return (this.numItems / this.arr.length) > 0.80;
    }

    computeHash(key, size = this.arr.length) {
        let hash = 5381;
        for(let i = 0; i < key.length; i++) {
            hash += 13 * hash + key.charCodeAt(i);
        }
        return hash % size;
    }

    resizeArr() {
        console.log("Resizing Array");
        let new_arr = new Array(this.arr.length * 2);
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr[i]) {
                let current = this.arr[i].head;
                while(current) {
                    const index = this.computeHash(current.key, new_arr.length);
                    if(!new_arr[index]) {
                        new_arr[index] = new LinkedList();
                        new_arr[index].insert(current.key, current.data);
                        current = current.next;
                    } else {
                        new_arr[index].insert(current.key, current.data);
                        current = current.next;
                    }
                }
            }
        }
        this.arr = new_arr;
    }

    push(key,data) {
        this.numItems += 1;
        if(this.calcLoadFactor()) {
            this.resizeArr();
        }
        const index = this.computeHash(key, this.arr.length);
        if(!this.arr[index]) {
            this.arr[index] = new LinkedList();
            this.arr[index].insert(key,data);
        } else {
            this.arr[index].insert(key,data);
        }
    }

    retrieve(key) {
        const index = this.computeHash(key, this.arr.length);
        if(!this.arr[index]) {
            console.log("Nothing to retrieve");
            return;
        } else {
            let current = this.arr[index].head;
            while(current) {
                if(current.key === key) {
                    return current.data;
                } else {
                    current = current.next;
                }
            }
        }
        console.log("Nothing to retrieve");
        return;
    }

    remove(key) {
        const index = this.computeHash(key, this.arr.length);
        if(!this.arr[index]){
            console.log("Nothing to Delete");
            return;
        } else {
            return this.arr[index] = undefined;
        }
    }
}

let h1 = new HashTable();
h1.push("cow", "mooo");
h1.push("dog", "woof");
h1.push("snake", "hisss");
h1.push("cat", "meow");
h1.push("batman", "nananana");
h1.push("superman", "duh duh duh");

console.log(h1.retrieve("cow"));
console.log(h1.retrieve("dog"));
console.log(h1.retrieve("snake"));
console.log(h1.retrieve("cat"));
console.log(h1.retrieve("batman"));
console.log(h1.retrieve("superman"));





