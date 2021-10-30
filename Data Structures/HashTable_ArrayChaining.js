class HashTable {

    constructor(_size = 997) {
        this.arr = new Array(_size);
        this.numItems = 0;
        this.loadFactor = this.numItems / this.arr.length; // 80 % then increase the size of the array
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
            if(item) {
                item.forEach(([_key, _value]) => {
                    const index = this.computeHash(_key, newArr.length);
                    if(newArr[index]) {
                        newArr[index].push([_key, _value]);
                    } else {
                        newArr[index] = [[_key, _value]];
                    }
                })
            }
        })
        this.arr = newArr;
    }

    insert(_key, _value) {
        this.numItems += 1;
        this.calcLoadFactor();

        if(this.loadFactor > .8) {
            this.resizeArr();
        }

        const index = this.computeHash(_key, this.arr.length);

        if(this.arr[index]) {
            this.arr[index].push([_key, _value]);
        } else {
            this.arr[index] = [[_key, _value]];
        }
    }

    search(_key) {
        const index = this.computeHash(_key, this.arr.length);
        if(!this.arr[index]) {
            return null;
        }
        return this.arr[index].find(x => x[0] === _key)[1];
    }
}