#Crie um programa que receba vários números e os armazene numa lista. Em seguida, o programa informará quantos números foram digitados, a lista em ordem decrescente, se o valor 5 foi digitado e, em caso positivo, quantas vezes ele foi digitado.

lista=[]



lista.append(int(input("Digite um número:")))

while True:
    lista.append(int(input("Digite outro número:")))
    
    sn=input("Você gostaria de inserir mais um número? S/N").upper()

    while sn not in "SN":
        sn=input("Você gostaria de inserir mais um número? S/N").upper()
        
    if sn == "N":
        lista.sort(reverse=True)
        print(f"Foram digitados {len(lista)} números. \n A lista de números em ordem descrescente é: {lista}.")

        if 5 in lista:
            if lista.count(5) == 1:
                print(f"O valor 5 foi digitado 1 vez")
            else:
                print(f"O valor 5 foi digitado {lista.count(5)} vezes.")
        else:
            print("O número 5 não foi inserido.")
        break
