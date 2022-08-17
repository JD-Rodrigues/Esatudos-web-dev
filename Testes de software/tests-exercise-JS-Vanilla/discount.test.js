const {discount} = require('./calc')
const {test,expect, callTest} = require('./tests')



callTest('Função discount', ()=>{
    test(()=>{
        expect(discount(8,2)).toBe(6)
    })
})