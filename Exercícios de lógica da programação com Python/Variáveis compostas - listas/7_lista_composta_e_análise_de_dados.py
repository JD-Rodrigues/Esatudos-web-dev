#Crie um programa que receba nome e peso de várias pessoas e retorne quantas pessoas foram cadastradas, o maior e o menor peso cadastrados e de quais pessoas foram esses pesos.

lista=[]

maior=0
menor=0
temp=[]

cont=1
while True:
    temp.append(input("Nome:"))
    temp.append(int(input("Peso:")))
    lista.append(temp[:])
    temp.clear()

    sn=str(input("Você gostaria de cadastrar mais uma pessoa? S/N")).upper()

    while sn != "S" and sn != "N":
        sn=input("Opção inválida! Você gostaria de cadastrar mais uma pessoa? S/N").upper()

    if sn == "N":
        break


for i,v in enumerate(lista):
    if i == 0:
        menor= maior= v[1]
    else:
        if v[1] > maior:
            maior=v[1]
        if v[1] < menor:
            menor=v[1]            
        
print(f"Ao todo, você cadastrou {len(lista)} pessoas.\n O maior peso foi {maior}kg. Peso de:", end=" ")

for i,v in enumerate(lista):
    if v[1] == maior:
        print(f"{v[0]}", end="  ")

print(f"\n O menor peso foi {menor}kg. Peso de: ", end=" ")

for i, v in enumerate(lista):
    if v[1] == menor:
        print(f"{v[0]}", end="  ")



