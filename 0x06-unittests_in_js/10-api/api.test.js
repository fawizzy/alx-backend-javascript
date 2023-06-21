const expect = require("chai").expect
const { json } = require("express")
const request = require("request")


describe("Index", function(){
    it("check for correct status code", function(done){
        const url = "http://localhost:7865/" 
        request(url, function(err, response, body){
            expect(response.statusCode).to.be.equal(200)
            done()
        })
    })

    it("check for correct body", function(done){
        const url = "http://localhost:7865/" 
        request(url, function(err, response, body){
            expect(response.body).to.be.equal('Welcome to the payment system')
            done()
        })
    })

    it("checking content type", function(done){
        const url = "http://localhost:7865/" 
        request(url, function(err, response, body){
            expect(response.headers["content-type"]).to.be.equal("text/html; charset=utf-8")
            done()
        })
    })

    it("checking content type", function(done){
        const url = "http://localhost:7865/" 
        request(url, function(err, response, body){
            expect(response.headers["content-type"]).to.be.equal("text/html; charset=utf-8")
            done()
        })
    })

})


describe("cart", function(){
    it("correct status code when id is a number", (done)=>{
        const url = "http://localhost:7865/cart/13"
        request(url, (request, response)=>{
            expect(response.body).to.be.equal("Payment methods for cart 13")
            done()
        })
    })

    it("correct status code when id is a number", (done)=>{
        const url = "http://localhost:7865/cart/hello"
        request(url, (request, response)=>{
            expect(response.statusCode).to.be.equal(404)
            done()
        })
    })
})


describe("available payments", function(){
    it("test statuscode for available payments",(done)=>{
        const option = {
            url: "http://localhost:7865/available_payments"
        }
        request.get(option, function(error, response, body){
            expect(response.statusCode).to.be.equal(200)
            done()
        })
    })

    it("test output for availalepayments",(done)=>{
        const option = {
            json: true 
        }
        const payLoad = {
            payment_methods: {
            credit_cards: true,
            paypal: false
            }
        }
        request.get("http://localhost:7865/available_payments", option, function(error, response, body){
            expect(response.body).to.deep.equal(payLoad)
            done()
        })
    })
})

describe("login", function(){
    it("test statuscode for log in",(done)=>{
        const option = {
            url: "http://localhost:7865/login",
            json: true,
            body: {
                userName: 'JOE'
            }
        }
        request.post(option, function(error, response, body){
            expect(response.statusCode).to.be.equal(200)
            done()
        })
    })

    it("test output for username",(done)=>{
        const option = {
            url: "http://localhost:7865/login",
            json: true,
            body: {
                userName: 'JOE'
            }
        }
        request.post(option, function(error, response, body){
            expect(response.body).to.be.equal("Welcome JOE")
            done()
        })
    })
})
