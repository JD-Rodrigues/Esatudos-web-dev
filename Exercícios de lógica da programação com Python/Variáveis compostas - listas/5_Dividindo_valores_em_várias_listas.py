#Crie um programa que recebe vários números, os armazena em uma lista geral e, em seguida, os classifica em duas listas diferentes: pares e ímpares. A seguir, mostra cada uma dessas listas.

lista=[]

lista_par=[]

lista_ímpar=[]

lista.append(int(input("Digite um número:")))

while True:
    lista.append(int(input("Digite mais um número:")))
    sn=input("Deseja inserir mais um número? S/N").upper()
    while sn not in "SN":
        sn=input("Deseja inserir mais um número? S/N").upper()

    if sn == "N":
        break

for num in lista:
    if num == 0 or num % 2 == 0:
        lista_par.append(num)
    else:
        lista.append(num)

print(f"Lista geral: {lista}. \n Lista de números pares: {lista_par}. \n Lista de números ímpares: {lista_ímpar}.")
