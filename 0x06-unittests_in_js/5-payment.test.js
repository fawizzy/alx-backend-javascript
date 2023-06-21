const Utils = require("./utils")
const sinon = require("sinon")
const expect = require("chai").expect
const sendPaymentRequestToApi = require("./3-payment")
const assert = require("assert")
describe("test sendtoapi using spy", function(){
    it("testing sendtoAPI", function(){
        beforeEach(function(){
        })
        afterEach(function(){
            sinon.restore()
        })
        let spy = sinon.spy(console, "log")
        sendPaymentRequestToApi(100, 20)
        assert(spy.withArgs("The total is: 120").calledOnce)
    })
    it("testing sendtoAPI with 10 and 10", function(){
        let spy = sinon.spy(console, "log")
        sendPaymentRequestToApi(10, 10)
        assert(spy.withArgs("The total is: 20").calledOnce)
    })
})