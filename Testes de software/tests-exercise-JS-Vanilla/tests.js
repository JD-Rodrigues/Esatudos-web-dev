function test(cb){
    cb()
}


// function expect(result) {
//     return {
//         toBe: (expectedValue)=>{
//             if (result === expectedValue) {
//                 console.log('Passou!')
//             } else {
//                 console.log('Falhou! :(')
//             }
//         }
//     }
// }

function callTest(title,testFunction) {
    console.log(title)
    try {
        testFunction()
        console.log('Passou! :)')
    } catch (error) {
        console.log('Não passou... :(')
    }
}

function expect(result) {
    return {
        toBe: (expectedValue)=>{
            if (result !== expectedValue) {
                throw {}
            } 
        }
    }
}

module.exports = {test,expect, callTest}