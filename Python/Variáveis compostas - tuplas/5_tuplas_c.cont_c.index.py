#Crie um programa que receba 4 números e os armazene numa tupla e, em seguida, informe quais foram os valores digitados, quantas vezes o número 9 apareceu, se o número 3 aparece, e em que posição e quais os valores pares digitados.

tupla=(int(input("Digite um numero:")), int(input("Digite outro número:")), int(input("Digite mais um número:")), int(input("Digite um último número:")))

pares=0
print("="*30)

print(f"Você digitou os valores: {tupla}. \n O número 9 apareceu {tupla.count(9)} vezes.")

if 3 not in tupla:
    print("O número 3 não apareceu em nenhuma posição.")
else:
    print(f"O número 3 apareceu na {tupla.index(3)+1}ª posição.")
print("Os valores pares digitados foram: ", end="")
for pos, numero in enumerate(tupla):
    if numero % 2 == 0:
        pares=pares+1
        print(numero, end=" ")
if pos != 1 and pares==0:
            print("nenhum.")
