const {it, describe} = require("mocha")
const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect;

describe("test 2-calcul with chai", function(){
    it("test for sum", function(){
        const sum = calculateNumber('SUM', 1.4, 4.5);
        expect(sum).to.equal(6)
    })

    it("test for subtraction", function(){
        const sub = calculateNumber('SUBTRACT', 1.4, 4.5);
        expect(sub).to.equal(-4)
    })
    it("test for division", function(){
        const divide = calculateNumber('DIVIDE', 1.4, 4.5);
        expect(divide).to.equal(0.2)
    })
    it("test for division", function(){
        const divide = calculateNumber('DIVIDE', 1.4, 0);
        expect(divide).to.equal("Error")
    })
})
