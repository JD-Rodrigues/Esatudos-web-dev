
let lista = [0,1,2,3,4,5,6,7,8,9,10]

function parToZero (arr) {
    if (!arr||!arr.length) {
        console.log(-1)
    } else {
        for (let i=0;i<arr.length;i++) {
            if (arr[i] === 0) {
                console.log(`O ${i+1}º número já é um zero.`) 
            } else if (arr[i]%2===0) {
                console.log(`Número ${arr[i]} substituído por 0.`)
                arr[i]=0
            }   
        }  
        console.log(arr)      
    }       
    
}

parToZero(lista)




