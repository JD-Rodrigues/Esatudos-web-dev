#Crie um programa que receba 2 números e apresente ao usuário um menu com 5 opções:

#1 - somar
#2 - multiplicar
#3 - comparar valores
#4 - inserir novos números
#5 - encerrar

#Após a escolha, o programa executa a ação escolhida e reexibe o menu, para que o usuário escolha uma nova ação. Isso acontecerá até que ele digite 5 e finalize. Se digitar valores diferentes das opções no menu, uma mensagem aparecerá, indicando que a informação inserida é inválida, e uma nova chance será dada.


from time import sleep

print("Digite dois números e depois escolha o que gostaria de fazer com eles.")

num1=int(input("Número 1:"))
num2=int(input("Número 2:"))


option=0

while option != 5:
    sleep(1)
    print("Digite o número da opção desejada: \n [1] Somar \n [2] Multiplicar \n [3] Comparar valores \n [4] Inserir novos números \n [5] Encerrar")

    option=int(input("Qual sua opção?"))
    sleep(1)

    if option == 1:
            print(f"A soma de {num1} e {num2} é {num1+num2}.")
           

    elif option == 2:
            print(f"{num1} multiplicado por {num2} é igual a {num1*num2}.")
            

    elif option == 3:
            if num1 > num2:
                print(f"O maior número é {num1}.")
                
            else: 
                print(f"O maior número é {num2}.")
                
    elif option == 4:
        num1=int(input("Número 1:"))
        num2=int(input("Número 2:"))     

    elif option == 5:
            print("Encerrado.")

    else:
        print("Opção inválida! Qual sua opção? ")
