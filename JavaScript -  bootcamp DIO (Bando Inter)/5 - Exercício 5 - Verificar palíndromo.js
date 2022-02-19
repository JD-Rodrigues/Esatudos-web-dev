/*function verificaPalindromo(string) {
    let string1 = string.split('').join()
    let string2 = string.split('').reverse().join()
    
    if (!string) {
        return 'Digite uma sequência de caracteres'
    } else {
        if (string1 === string2) {
            return 'É palíndromo!'
        }else {
            return 'Não é palíndromo :('
        }
    }
    
}

console.log(verificaPalindromo('briga'))*/

function verificaPalindromo2(string) {
    if (!string) {
        return 'Digite uma sequência de caracteres'
    } else {
        for (let i=0;i<=string.length/2;i++) {
            if (string[i]!==string[string.length-1-i]) {
                return 'Não é palíndromo... :('
            } else {
                return 'É palíndromo!'
            }
        }
    }
}
 console.log(verificaPalindromo2('gato'))



