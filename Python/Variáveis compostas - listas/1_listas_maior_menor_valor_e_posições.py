#Crie um programa que receba 5 números e os armazene em uma lista. EM seguida, mostre essa lista, assim como o maior e menor valor e as posições em que estes valores aparecem na lista.

lista=[]


for c in range(1,6):
    lista.append(int(input("Digite um número:")))    
    

    
    
print(f"Você digitou os números {lista}. \n O maior valor foi {max(lista)}, nas posições ", end='')

for i, v in enumerate(lista):
    if v == max(lista):
        print(i, end="... ")

print(f" \n O menor valor foi {min(lista)}, nas posições ", end='')

for i,v in enumerate(lista):
    if v == min(lista):
        print(i, end='...  ')