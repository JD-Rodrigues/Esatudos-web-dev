import { isAdminMiddleware } from "middlewares/user.js";
import ROLES from 'constants/roles.js'


const mockAdmin = {
    user: {
        role:ROLES.ADMIN
    } 
}

const mockUser = {
    user: {
        role: ROLES.USER
    }
}
it('should return {user:{role:ROLES.ADMIN}}', ()=>{    
    expect(isAdminMiddleware(mockAdmin)).toEqual({user:{role:ROLES.ADMIN}})        
})     

it('should return throw new Error "Você não possui permissão para executar essa operação."', ()=>{    
    try {
        isAdminMiddleware(mockUser)
    } catch (error) {
        expect(error.message).toBe('Você não possui permissão para executar essa operação.') 
    }    
}) 
