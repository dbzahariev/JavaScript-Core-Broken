class Stringer {
    constructor(str, length) {
        this.str = str;
        this.length = length;
    }

    get innerString() {
        return this.str.toString();
    }

    get innerLength() {
        return this.length;
    }

    increase(len) {
        this.length += len;
    }

    decrease(len) {
        this.length -= len;
        if (this.length < 3) {
            this.length = 0;
        }
    }

    toString() {
        if (this.length >= this.str.length) {
            return this.str;
        }

        if (this.length === 0) {
            return '...';
        }

        return this.str.substr(0, this.length) + '...';
    }
}

let testStringer = new Stringer("Test", 5);
console.log(testStringer.toString()); //Test

testStringer.decrease(3);
console.log(testStringer.toString()); //Te...

testStringer.decrease(5);
console.log(testStringer.toString()); //...

testStringer.increase(4);
console.log(testStringer.toString()); //Test