const getPaymentTokenFromAPI = require("./6-payment_token")
const expect = require("chai").expect
describe("test async function", function(){
    it("test getPaymentFromAPI", function(done){
        getPaymentTokenFromAPI(true)
            .then((data)=>{
                expect(data.data).to.be.equal('Successful response from the API')
                done()
            })
    })
})