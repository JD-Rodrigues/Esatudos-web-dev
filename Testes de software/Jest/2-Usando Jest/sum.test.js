
const {jest} = require('@jest/globals')

// const sum = require('./sum.js')

// test('Soma 2 números', ()=>{
//     expect(sum(2,3)).toBe()
// })

const myMock = jest.fn()
const a = new myMock

console.log(myMock)





