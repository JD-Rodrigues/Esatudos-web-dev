import { getUserByUid, getUserByUsernameAndPassword } from "../../../src/database/user/read";
import {loadDatabase} from '../../../src/database/user/create'

jest.mock('../../../src/database/path.js', ()=>null)

beforeEach(()=>{
    const loadDatabase = jest.fn().mockResolveValue([])
})

it('should throw a new Error("Não existe usuário com uid informado.")', async()=>{
    expect(await getUserByUid()).toThrowError(new Error("Não existe usuário com uid informado."))
     
})