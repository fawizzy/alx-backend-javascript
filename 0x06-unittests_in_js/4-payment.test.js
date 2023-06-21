const Utils = require("./utils")
const sinon = require("sinon")
const expect = require("chai").expect
const sendPaymentRequestToApi = require("./3-payment")
const assert = require("assert")
describe("test sendtoapi using spy", function(){
    it("testing sendtoAPI", function(){
        let spy = sinon.spy(console, "log")
        let stub = sinon.stub(Utils, "calculateNumber").returns(10)
        sendPaymentRequestToApi(100, 20)
        assert(spy.withArgs("The total is: 10").calledOnce)
        assert(stub.withArgs("SUM", 100, 20).calledOnce);
    })
})