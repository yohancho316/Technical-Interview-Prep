class Stack {

    constructor() {
        this.array = [];
        this.pos = 0;
    }

    isEmpty() {
        return this.pos === 0;
    }

    push(_data) {
        if(this.isEmpty())
            return null;
        this.array[this.pos] = _data;
        this.pos += 1;
    }

    pop() {
        if(this.isEmpty())
            return null;
        let data = this.array[this.pos - 1];
        this.pos -= 1;
        return data;
    }

    peek() {
        if(this.isEmpty())
            return null;
        return this.array[this.pos - 1];
    }
}