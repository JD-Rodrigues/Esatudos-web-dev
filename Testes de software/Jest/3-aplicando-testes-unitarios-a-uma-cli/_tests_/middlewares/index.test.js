import applyMiddlewares from 'middlewares/index.js'



const mid1 = jest.fn(data=>data)
const mid2 = jest.fn(data=>data)
const argument = "data"

const appliedMiddlewares = applyMiddlewares(mid1, mid2)

afterEach(jest.clearAllMocks)

it('should be a function.', ()=>{
    expect(appliedMiddlewares).toEqual(expect.any(Function))  
})

test('mid1 to have been called 0 times', ()=>{
    expect(mid1).not.toHaveBeenCalled()  
})

test('mid2 to have been called 0 times', ()=>{
    expect(mid2).not.toHaveBeenCalled()   
})

it('have to be called once',()=>{
    expect.assertions(1)
    appliedMiddlewares(argument)
    expect(mid1).toHaveBeenCalledTimes(1) 
})

it('have to be called once',()=>{
    expect.assertions(1)
    appliedMiddlewares(argument)
    expect(mid2).toHaveBeenCalledTimes(1) 
}) 

it('have to be called with "argument"',()=>{
    expect.assertions(1)
    appliedMiddlewares(argument)
    expect(mid1).toHaveBeenCalledWith(argument) 
}) 

it('have to be called with "argument"',()=>{
    expect.assertions(1)
    appliedMiddlewares(argument)
    expect(mid2).toHaveBeenCalledWith(argument) 
}) 
 