const {discount} = require('./calc')

describe('Função discount', ()=>{
    it('Deve retornar a diferença entre 8 e 2', ()=>{
        expect(discount(8,2)).toBe(6)
    })
})