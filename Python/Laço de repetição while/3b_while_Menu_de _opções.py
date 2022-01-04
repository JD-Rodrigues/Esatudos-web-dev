
from time import sleep

num1=int(input("Digite um número:"))
sleep(0.5)
num2=int(input("Digite outro número:"))

option=0

while option != 5:
    sleep(1.5)
    option=int(input("\n \n O que gostaria de fazer com os números que digitou? \n [1] Somar \n [2] Multiplicar \n [3] Comparar valores \n [4] Inserir novos números \n [5] Encerrar \n \n"))
    
    sleep(0.5)

    if option == 1:
        print(f"\n A soma de {num1} e {num2} é {num1+num2}.")

    elif option == 2:
        print(f"\n O produto de {num1} e {num2} é {num1*num2}.")

    elif option == 3:
        if num1 > num2:
            print(f"\n {num1} é o maior número.")

        else:
            print(f"\n {num2} é o maior número.")

    elif option == 4:
        num1=int(input("\n Digite um número:"))
        sleep(0.5)
        num2=int(input("\n Digite outro número:"))

    elif option == 5:
        print("\n ENCERRADO.\n")


    elif (option != 1 or option != 2 or option != 3 or option != 4 or option !=  5):
        option=0