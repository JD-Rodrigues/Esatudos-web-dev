import { createUser } from '../../../src/database/user/create.js'
import * as file from '../../../src/database/file.js'
import path from '../../../src/database/path.js'
import faker from 'faker'


jest.mock('../../../src/database/file.js')
jest.mock('../../../src/database/path.js')

const fakeId = jest.spyOn(faker.datatype, "uuid").mockImplementation(()=>"123")
const usr = {
    email:"anymail@gmail.com",
    password: 123456,
    username: "JD",
    name: "Domingos",
    lastName: "Rodrigues"
}

const ROLES = {
    USER: "USER",
    ADMIN: "ADMIN"
}

beforeEach(()=>{
    file.loadDatabase.mockResolvedValueOnce([]) 
})

afterEach(()=>{
    jest.clearAllMocks()
    
})

describe('Function createUser tests', ()=>{
    it('should call loadDatabase() once', async ()=>{   
    
        const user = await createUser(usr)
    
        expect(file.loadDatabase).toHaveBeenCalledTimes(1) 
    }) 
    
    it('should call saveDatabase() once', async ()=>{   
        const user = await createUser(usr)
        expect(file.saveDatabase).toHaveBeenCalledTimes(1)    
    })  
    
    it('should call faker.datatype.uuid() as FakeId once', async ()=>{   
        const user = await createUser(usr)
        expect(fakeId).toHaveBeenCalledTimes(1)   
    })  
    
    it('should call saveDatabase() with usr', async ()=>{   
        const user = await createUser(usr)
        expect(file.saveDatabase).toHaveBeenCalledWith([user]) 
    }) 

    it('should return {...usr, role: ROLES.USER, uid: expect.any(String)}', async()=>{
        const user = await createUser(usr)
        expect(user).toEqual({
            ...usr,
            role: ROLES.USER, 
            uid: expect.any(String)
        }) 
    })     

    it('should return {...usr, role: "ADMIN", uid: expect.any(String)}', async()=>{ 
        const user = await createUser({...usr, role:"ADMIN"})
        expect(user).toEqual({
            ...usr,
            role: ROLES.ADMIN, 
            uid: expect.any(String)
        }) 
    })  
})  