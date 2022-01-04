#Crie um programa que receba vários números, somando-os e, no final, informe quantos números foram digitados e a soma deles. O número 999 será o interruptor do programa e deverá ser inserido pelo usuário quando ele quiser finalizar e obter os resultados. Detalhe: o valor da soma dos números não deverá incluir o interruptor (999), nem deverá ele compor a quantidade de números digitados.


num= soma= cont=0

num=int(input("Digite números para somar [P/ parar: 999]."))

while num != 999:
    soma+=num
    cont+=1
    num=int(input())

print(f"Foram digitados {cont} números e a soma é {soma}." )