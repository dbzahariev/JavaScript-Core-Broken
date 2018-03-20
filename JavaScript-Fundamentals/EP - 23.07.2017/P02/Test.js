const Sumator = require('./P02')
const expect = require('chai').expect

describe("Sumator Unit test", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator()
    })

    describe("Test only Def Class", function () {
        it("Test exist class", function () {
            expect(sumator.data !== undefined).to.eql(true)
        })

        it("test exit functions", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.eql(true)
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.eql(true)
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.eql(true)
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.eql(true)
        })

        it("test exit data", function () {
            expect(sumator.data.length).to.be.eql(0)
        })
    })

    describe("add func tests", function () {
        it("Add only numbers", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.data.join(', ')).to.be.eql('5, 4, 3')
        })

        it("Add only String", function () {
            sumator.add("Kiro")
            sumator.add('Ivan')
            sumator.add('Gosho')
            expect(sumator.data.join(', ')).to.be.eql('Kiro, Ivan, Gosho')
        })

        it("Add object", function () {
            sumator.add({name: "kiro"})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.eql('[object Object], [object Object]')
        })

        it("Add Mix Type", function () {
            sumator.add({name: "kiro"})
            sumator.add(4)
            sumator.add("Gosho")
            expect(sumator.data.join(', ')).to.be.eql('[object Object], 4, Gosho')
        })
    })

    describe("Test Sum Func", function () {
        it("Numbers", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.eql(12)
        })

        it("NOT Numbers", function () {
            sumator.add('Gosho')
            sumator.add({})
            sumator.add({name: "krisi"})
            expect(sumator.sumNums()).to.be.eql(0)
        })

        it("Numbers and NOT Numbers", function () {
            sumator.add('Gosho')
            sumator.add(4)
            sumator.add({})
            sumator.add(3)
            expect(sumator.sumNums()).to.be.eql(7)
        })
    })

    describe("removeByFilter", function () {
        it("remove all odd num", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.eql('0, 2, 4, 6, 8, 10')
        })


        it("remove all num < 5", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x > 5)
            expect(sumator.data.join(', ')).to.be.eql('0, 1, 2, 3, 4, 5')
        })

        it("remove all num undef", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            expect(() => sumator.removeByFilter(undefined).to.throw)
        })
    })

    describe("toString", function () {
        it("with items in array", function () {
            sumator.add(4)
            sumator.add("Gosho")
            expect(sumator.toString()).to.be.eql("4, Gosho")
        })

        it("with No items", function () {
            expect(sumator.toString()).to.be.eql('(empty)')
        })
    })
})