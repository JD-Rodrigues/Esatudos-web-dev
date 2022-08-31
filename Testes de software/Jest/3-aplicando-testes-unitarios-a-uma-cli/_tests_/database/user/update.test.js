import { updateUserByUid } from "database/user/update";
import * as file from 'database/file'


jest.mock('database/path')
jest.mock('database/file.js')

file.loadDatabase.mockResolvedValue([{uid:"123", user:'JD'}])   
 
afterEach(()=>{
    jest.clearAllMocks()
})  

it('should call file.loadDatabase() once', ()=>{
    expect.assertions(1)
    updateUserByUid({uid:"123", user:"JD"})
    expect(file.loadDatabase).toHaveBeenCalledTimes(1)        
}) 

it('should call file.saveDatabase() once.', async ()=>{
    expect.assertions(1)
    await updateUserByUid({uid:"123", user:"Marcos"})
    expect(file.saveDatabase).toHaveBeenCalledTimes(1)       
}) 

it('should call file.saveDatabase() with [{uid:"123", user:"Marcos"}]', async ()=> {
    expect.assertions(1)
    await updateUserByUid({uid:"123", user:"Marcos"})
    expect(file.saveDatabase).toHaveBeenCalledWith([{uid:"123", user:"Marcos"}])
})

it('should return {uid:"123", user:"Marcos"}', async () => {
    expect.assertions(1)
    expect(await updateUserByUid({uid:"123", user:"Marcos"})).toEqual({uid:"123", user:"Marcos"}) 
})      

it('should throw an error: "Usuário com UID 456 não existe"', async () => {
    expect.assertions(1)
    try {
        await updateUserByUid({uid:"456", user:"Marcos"})
    } catch (error) {
        expect(error.message).toEqual("Usuário com UID 456 não existe")   
    }finally {
        console.log(file.loadDatabase.mock)
    } 
})


