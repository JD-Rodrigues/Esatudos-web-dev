import { removeUser } from "database/user/remove";
import * as file from 'database/file.js'


jest.mock('database/file.js') 
jest.mock('database/path.js') 

beforeEach(()=>{
    file.loadDatabase.mockResolvedValueOnce([{uid: "123"},{uid:"456"}]) 
})

afterEach(()=>jest.clearAllMocks())
  
it('should be call file.loadDatabase() once', ()=>{
    expect.assertions(1)
    removeUser("123")
    expect(file.loadDatabase).toHaveBeenCalledTimes(1)   
})    

it('should be call saveDatabase() once', async ()=>{
    expect.assertions(1)  
    await removeUser("123")  
    expect( file.saveDatabase).toHaveBeenCalledTimes(1)    
})      

it('should be saveDatabase() called with the updated array: [{uid:"456"}]', async ()=>{
    expect.assertions(1) 
    await removeUser("123") 
    expect(file.saveDatabase).toHaveBeenCalledWith([{uid:"456"}])   
})    

it('should return {uid:"123"}', async () => {
    expect.assertions(1)
    expect(await removeUser("123")).toEqual({uid:"123"})    
}) 
     
it('should throw an message error: "Usuário com UID "789" não existe"', async ()=> {
    try {
        await removeUser("789")
    } catch (error) {
        expect(error.message).toEqual("Usuário com UID 789 não existe")
    }   
})
 

    