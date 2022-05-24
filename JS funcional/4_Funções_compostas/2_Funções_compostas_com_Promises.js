const text = 'Texto com efeitos dos eventos'

function styler(...fns) {
    return function(valor) {
        return fns.reduce(async(acc, fn)=>{
            if (Promise.resolve(acc)===acc ){
                return fn(await acc)
                //ou return acc.then(res=>fn(res))
            }else {
                return fn(acc)
            }
        },valor)
    }
}

function upper(valor) {
    return valor.toUpperCase()
}

function emphasize(valor) {
    return `${valor}!!!`
}

function spacer(valor) {
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(valor.split('').join(' '))
        }, 3000)
        
    })
    
}

const modifiedString = styler(upper, emphasize, spacer)

modifiedString('hoje é um novo dia').then(console.log)