const assert = require("assert");
const calculateNumber = require("./0-calcul");
const {it, describe} = require("mocha")

describe("calculateNumber", function(){
    it("addition of 1 and 3 should be 4", function(){
        const sum = calculateNumber(1, 3);
        assert.equal(sum, 4);
    })

    it("addition of 1 and 3.7 should be 5", function(){
        const sum = calculateNumber(1, 3.7);
        assert.equal(sum, 5);
    })

    it("addition of 1.5 and 3.7 should be 6", function(){
        const sum = calculateNumber(1.5, 3.7);
        assert.equal(sum, 6);
    })

})
