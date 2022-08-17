const {bonus} = require('./calc')


it('Função calcula bônus', ()=>{
    expect(bonus(8,2)).toBe(220) 
})