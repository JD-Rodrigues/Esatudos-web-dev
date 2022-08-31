import { getUserByUid, getUserByUsernameAndPassword } from "database/user/read";
import * as file from 'database/file'

jest.mock('database/file')
jest.mock('database/path.js')

beforeEach(()=>{
    file.loadDatabase.mockResolvedValue([{userName:'JD', password:"abc", uid:"123"}])
}) 
afterEach(()=>{
    jest.clearAllMocks()
})

it('should throw a new Error("Não existe usuário com uid informado.")', async ()=>{
    expect.assertions(1)

    try {
        await getUserByUid('456')
    } catch (error) {
        expect(error.message).toBe('Não existe usuário com uid informado.')
    }           
})    
 
it('should call loadDatabase once', async ()=>{
    expect.assertions(1)
    await getUserByUid("123")
    expect(file.loadDatabase).toHaveBeenCalledTimes(1)    
})

it('should return {userName:"JD", password: "abc", uid:"123"}', async ()=>{
    expect.assertions(1) 
    expect(await getUserByUid("123")).toEqual({userName:'JD', password:"abc", uid:"123"})  
})  

it('should call loadDatabase once', async ()=>{
    expect.assertions(1)
    await getUserByUsernameAndPassword("JD", "abc")
    expect(file.loadDatabase).toHaveBeenCalledTimes(1)      
}) 

it('should return {userName:"JD", password: "abc", uid:"123"}', async ()=>{
    expect.assertions(1) 
    expect(await getUserByUsernameAndPassword("JD", "abc")).toEqual({userName:'JD', password:"abc", uid:"123"})   
})  

it('should throw a new Error("Não existe usuário com uid informado.")', async ()=>{
    expect.assertions(1)

    try {
        await getUserByUsernameAndPassword('Marcos', 'hasdjashj')
    } catch (error) {
        expect(error.message).toBe('Credenciais incorretas ou usuário inexistente.') 
    }           
}) 