import { loadDatabase, saveDatabase } from "database/file";
import * as fs from "fs";
import databasePath from 'database/path.js'
import {toString} from 'database/parser.js'





jest.mock('database/path.js') 
jest.mock('database/parser.js')
jest.mock('fs', ()=>{
    return {
        promises:{
            readFile: jest.fn(),
            writeFile:jest.fn()
        }
    }
})

const user = [{user:"JD"}]
 
describe('loadDatabase() tests', () => {
    it('should call promises.readFile() once.', () => {
        expect.assertions(1)
        loadDatabase() 
        expect(fs.promises.readFile).toHaveBeenCalledTimes(1)    
    })   
    
    it('should call promises.readFile() with dataBasePath.', () => {
        expect.assertions(1)
        loadDatabase()
        expect(fs.promises.readFile).toHaveBeenCalledWith(databasePath)       
    })    
    
    it('should return an Object', () => {
        expect.assertions(1)    
        expect(loadDatabase()).toEqual(expect.any(Object))             
    })   
    
    it('should throw a String as error.message  ', () => {
        expect.assertions(1)    
        try {
            jest.mock('databas/path.js') 
            loadDatabase()        
        } catch (error) {
            expect(error.message).toEqual(expect.any(String))  
        }           
    })  
})

describe('saveDatabase tests', () => {
    it('should call fs.promises.writeFile() once.', () => {
        expect.assertions(1)   
        saveDatabase()
        expect(fs.promises.writeFile).toHaveBeenCalledTimes(1) 
    })

    it('should call fs.promises.writeFile() with.', async () => {
        expect.assertions(1)   
        await saveDatabase()  
        expect(fs.promises.writeFile).toHaveBeenCalledWith(databasePath, toString(user))         
    })        
}) 


// Falta implementar o teste de erro isPropertyAccessOrQualifiedName.



  