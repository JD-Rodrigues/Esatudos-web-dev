import sum from "./sum.js"

function describe(desc, cb){
    console.log(desc)
    cb()
}

function test(desc, cb){
    console.log(desc)
    cb()
}

function expect(result){
    return {
        toBe: function(expected){
            if(expected===result){
                console.log('Passou!')
            }else{
                console.log('Não passou :(')
            }
        }
    }
    
}

//USO

describe('Teste da função', ()=>{
    test('Soma dois números', ()=>{
        expect(sum(2,3)).toBe(5)
    })
})

