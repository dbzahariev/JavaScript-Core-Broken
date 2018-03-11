class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}\n`;
        }
        return output.trim();
    }
}

let parentRat = new Rat('rat');
let Rat1 = new Rat('rat1');
let Rat2 = new Rat('rat2');
let Rat3 = new Rat('rat3');
parentRat.rats.push(Rat1);
parentRat.rats.push(Rat2);
parentRat.rats.push(Rat3);
console.log(parentRat);