class HashTable {

    constructor() {
        this.arr = new Array(7);
        this.numItems = 0;
    }

    computeHash(key, size=this.arr.length) {
        let hash = 5381;
        for(let i = 0; i < key.length; i++) {
            hash += 13 * hash + key.charCodeAt(key[i]);
        }
        return hash % size;
    }

    calcLoadFactor() {
        return (this.numItems / this.arr.length) > 0.80
    }

    resizeArr() {
        console.log("Resizing Array!");
        let new_arr = new Array(this.arr.length * 2);
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr[i]) {
                let temp_arr = this.arr[i];
                for(let j = 0; j < temp_arr.length; j++) {
                    const index = this.computeHash(temp_arr[j][0]);
                    if(new_arr[index] === undefined) {
                        new_arr[index] = [temp_arr[j]];
                    }else {
                        new_arr[index].push(temp_arr[j]);
                    }
                }
            }
        }
        this.arr = new_arr;
    }

    insert(key, value) {
        this.numItems += 1;
        if(this.calcLoadFactor()) {
            this.resizeArr();
        }
        const index = this.computeHash(key, this.arr.size);
        if(this.arr[index]) {
            this.arr[index].push([key, value]);
        } else {
            this.arr[index] = [[key,value]];
        }
    }

    retrieve(key) {
        const index = this.computeHash(key, this.arr.size);
        if(this.arr[index]) {
            let temp_arr = this.arr[index];
            for(let i = 0; i < temp_arr.length; i++) {
                if(temp_arr[i][0] === key) {
                    return temp_arr[i][1];
                }
            }
        }
        return null;
    }

    delete(key) {
        const index = this.computeHash(key, this.arr.length);
        if(this.arr[index]) {
            this.arr[index] = undefined;
        }
        console.log("Nothing to Delete");
    }
}

let h1 = new HashTable();
h1.insert("cat", "meow");
h1.insert("mouse", "squeak");
h1.insert("dog", "woof");
h1.insert("cow", "moo");
h1.insert("person", "person");
h1.insert("alien", "wooo");
h1.insert("ghost", "boo");

console.log(h1.arr);
