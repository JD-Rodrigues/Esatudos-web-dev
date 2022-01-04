#Crie um programa que receba vários números e os armazene numa lista. Como resultado, ele mostrará uma lista com todos os números digitados, uma lista somente com números pares e outra somente com os números ímpares.

lista=[]

lista_par=[]

lista_ímpar=[]



while True:
    num=int(input("Digite um número:"))
    lista.append(num)
    if num == 0 or num % 2 == 0:
        lista_par.append(num)
    else:
        lista_ímpar.append(num)

    sn=input("Deseja inserir mais um número? S/N").upper()
    while sn not in "SN":
        sn=input("Deseja inserir mais um número? S/N").upper()

    if sn == "N":
        break

print(f"Lista geral: {lista}. \n Lista de números pares: {lista_par}. \n Lista de números ímpares: {lista_ímpar}.")
