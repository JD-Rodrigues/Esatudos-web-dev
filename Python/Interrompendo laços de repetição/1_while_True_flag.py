#Crie um programa que receba vários números, somando-os e, no final, informe quantos números foram digitados e a soma deles. O número 999 será o interruptor do programa e deverá ser inserido pelo usuário quando ele quiser finalizar e obter os resultados. Detalhe: o valor da soma dos números não deverá incluir o interruptor (999), nem deverá ele compor a quantidade de números digitados.


cont=0
soma=0
num=0
while True:
 
    if cont == 0:        
        num=int(input("Digite um número"))
        if num == 999:
            break
       
        
    elif cont > 0:        
        num=int(input("Digite mais um número:"))
        if num == 999:
            break

    cont=cont+1
    soma=soma+num
        
print(f"Você digitou {cont} números e a soma deles é {soma}.")    
   
    
        
    

    
