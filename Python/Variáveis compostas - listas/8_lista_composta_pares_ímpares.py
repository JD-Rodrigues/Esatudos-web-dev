#Crie um programa que receba 7 números e os armazene numa lista composta por duas outras listas: pares e ímpares. Ao ser executado, ele exibirá essas duas listas.

lista=[[],[]]

for c in range(1,8):
    num=int(input(f"Digite o {c}º número:"))
    if num == 0 or num % 2 == 0:
        lista[0].append(num)
    else:
        lista[1].append(num)

lista[0].sort()
lista[1].sort()

print(f" Lista de pares: {lista[0]}.\n Lista de ímpares: {lista[1]}.")
        