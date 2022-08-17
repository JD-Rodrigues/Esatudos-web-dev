const {discount} = require('./calc')
const {callTest} = require('./tests')
const assert = require('assert')



callTest('Função discount', ()=>{
    assert.strictEqual(discount(8,2),6)
})