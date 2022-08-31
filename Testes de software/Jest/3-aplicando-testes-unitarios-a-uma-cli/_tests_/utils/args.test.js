import parse, { validateArgs } from "utils/args";

const reportValidation = jest.fn()

describe('tests args', ()=>{
    it('should return {message: "", valid: true}', ()=>{
        expect(validateArgs({username:"JD Rodrigues", password:"readyplayer1", operation:"READ", data: "uid: '123'"})).toEqual({message: "", valid: true})
    })

    it('should return "Você precisa fornecer os argumentos corretos para a CLI"', ()=>{    
        expect(validateArgs()).toEqual({valid:false, message:'Você precisa fornecer os argumentos corretos para a CLI'})
    } )

    it('should return "Você precisa informar o argumento operation"',()=>{
        expect(validateArgs({username:"JD Rodrigues", password:"readyplayer1"})).toEqual({valid: false, message: "Você precisa informar o argumento operation"})
    })

    it("should return {username: 'JD', password:123}", ()=>{
        const arg = ["/usr/local/bin/node", "/usr/local/bin", "--username='JD'","--password=123"]
        expect(parse(arg)).toEqual({"username":"'JD'","password":"123"})
    })
})

