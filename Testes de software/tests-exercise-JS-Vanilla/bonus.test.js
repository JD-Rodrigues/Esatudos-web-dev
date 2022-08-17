const {bonus} = require('./calc')
const {test, expect, callTest} = require('./tests')



test(()=>{
    expect(bonus(8,2)).toBe(220)
})


callTest('Função bonus',()=>{
    test(()=>{
        expect(bonus(8,2)).toBe(220)
    })
} )