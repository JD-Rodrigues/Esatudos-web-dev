function expect(result) {
    return {
        toBe: (expectedValue)=>{
            if (result === expectedValue) {
                console.log('Passou!')
            } else {
                console.log('Falhou! :(')
            }
        }
    }
}