const {bonus} = require('./calc')
const {callTest} = require('./tests')
const assert = require('assert')




callTest('Função bonus',()=>{
    assert.strictEqual(bonus(8,2),220)
} )