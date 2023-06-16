const {it, describe} = require("mocha")
const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("test 1-calcul", function(){
    it("test for sum", function(){
        const sum = calculateNumber('SUM', 1.4, 4.5);
        assert.strictEqual(sum, 6)
    })

    it("test for subtraction", function(){
        const sub = calculateNumber('SUBTRACT', 1.4, 4.5);
        assert.strictEqual(sub, -4)
    })
    it("test for division", function(){
        const divide = calculateNumber('DIVIDE', 1.4, 4.5);
        assert.strictEqual(divide, 0.2)
    })
    it("test for division", function(){
        const divide = calculateNumber('DIVIDE', 1.4, 0);
        assert.strictEqual(divide, "Error")
    })
})
