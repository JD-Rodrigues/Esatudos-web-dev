#Crie um programa que receba vários números, somando-os e, no final, informe quantos números foram digitados e a soma deles. O número 999 será o interruptor do programa e deverá ser inserido pelo usuário quando ele quiser finalizar e obter os resultados. Detalhe: o valor da soma dos números não deverá incluir o interruptor (999), nem deverá ele compor a quantidade de números digitados.


soma=0
num=0
cont=0
while num != 999:
    num=int(input("Digite números para somar. P/ parar, digite 999."))
    soma=soma+num
    cont+=1
print(f"Foram digitados {cont-1} números e a soma é {soma-999}")

