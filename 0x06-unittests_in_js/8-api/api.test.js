const expect = require("chai").expect
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

    it("testing api", function(done){
        const url = "http://localhost:7865/" 
        request(url, function(err, response, body){
            console.log(response.headers["content-type"])
            expect(response.headers["content-type"]).to.be.equal("text/html; charset=utf-8")
            done()
        })
    })
})

