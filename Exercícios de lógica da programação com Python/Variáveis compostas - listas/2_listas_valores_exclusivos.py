#Crie um programa que receba vários números e, com eles, crie uma lista de números únicos. Ele informará se o número foi adicionado à lista ou não.

lista=[]

while True:
    num=int(input("Digite um número:"))
    if num not in lista:
        lista.append(num)
        print("Número adicionado com sucesso!")
    else:
        print("Este número já está na lista e não pode ser adicionado.")
        
    sn=input("Deseja contnuar? S/N").upper()
    
    while sn not in "SN":
        sn=input("Opção inválida! Deseja contnuar? S/N").upper()
                

    if sn == "N":
        print(f"Sua lista de números únicos é: {sorted(lista)}")
        break