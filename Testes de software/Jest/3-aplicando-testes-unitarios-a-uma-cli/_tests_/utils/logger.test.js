import loggers, { COLORS } from 'utils/logger.js'

const {log, success, error} = loggers

const spyLog = jest.spyOn(console, 'log')
const spyError = jest.spyOn(console, 'error')


describe('Testes de loggers', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks()
    })
    
    it('method log - should call console.log once.', ()=>{
        log('Hoje é um novo dia!')
    
        expect(spyLog).toHaveBeenCalledTimes(1)
        expect(spyLog).toHaveBeenCalledWith(COLORS.DEFAULT,'Hoje é um novo dia!')
    })
    
    it('method success - should call console.log once', ()=>{
        success("Parabéns!")
        expect(spyLog).toHaveBeenCalledTimes(1)
        expect(spyLog).toHaveBeenCalledWith(COLORS.GREEN, `✅ Parabéns!`)
    })
    
    it('method error - should call console.log once', ()=>{
        error('fail')
        expect(spyError).toHaveBeenCalledTimes(1)
        expect(spyError).toHaveBeenCalledWith(COLORS.RED,'🚨 fail')
    })

    it('method log - should call console.log with (COLORS.DEFAULT,"Hoje é um novo dia!)".', ()=>{
        log('Hoje é um novo dia!')
        expect(spyLog).toHaveBeenCalledWith(COLORS.DEFAULT,'Hoje é um novo dia!')
    })

    it('method success - should call console.log with (COLORS.GREEN, "✅ Parabéns!")', ()=>{
        success("Parabéns!")
        expect(spyLog).toHaveBeenCalledWith(COLORS.GREEN, `✅ Parabéns!`)
    })

    it('method error - should call console.log with (COLORS.RED,"🚨 fail")', ()=>{
        error('fail')
        expect(spyError).toHaveBeenCalledWith(COLORS.RED,'🚨 fail')
    })
})

3

