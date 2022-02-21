// Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

for (c=0;c<=100;c++) {
    if (c!=0 && c % 4==0) {
        console.log('pi')
    } else {
        console.log(c)
    }
}
