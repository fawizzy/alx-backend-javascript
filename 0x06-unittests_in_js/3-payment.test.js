const Utils = require("./utils")
const sinon = require("sinon")
const expect = require("chai").expect
const sendPaymentRequestToApi = require("./3-payment")
const assert = require("assert")
describe("test sendtoapi using spy", function(){
    it("testing sendtoAPI", function(){
        let spy = sinon.spy(Utils, "calculateNumber")
        sendPaymentRequestToApi(100, 20)

        assert(spy.calledOnce);
        spy.restore();

    })
})