#Crie um programa que jogue par ou ímpar com o usuário. O computador escolhe um número, passa a vez para o usuário, que também escolhe um  e responde se quer par ou ímpar. No final de cada jogada, o programa informa quem ganhou e por que. Quando o usuário perder uma, o programa finaliza e informa o número de vitórias consecutivas que ele obteve.

from random import randint

comp=randint(1,5)
victories=0
soma=0
result=""

while True:
    num=int(input("Eu já escolhi meu número. Escolha o seu:"))
    soma=comp+num

    if soma % 2 == 0:
        result = "P"
    else:
        result = "I"

    p_i=input("Par ou ímpar? (P/I)").upper() 

    while p_i != "P" and p_i != "I":
        p_i=input("Comando inválido! Par ou ímpar? (P/I)").upper()

    if p_i=="P":
        if result == "P":
            print(f"Acertou! O computador escolheu {comp}; mais {num} é igual a {soma}, que é par.")
            victories=victories+1
        else:
            print(f"Errou... :( \n O computador escolheu {comp}; mais {num} é igual a {soma}, que é ímpar. \n Você teve {victories} acertos consecutivos.")
            break

    elif p_i == "I":
        if result == "I":
            print(f"Acertou! O computador escolheu {comp}; mais {num} é igual a {soma}, que é impar.")
            victories=victories+1
        else:
            print(f"Errou... :( \n O computador escolheu {comp}; mais {num} é igual a {soma}, que é par. \n Você teve {victories} acertos consecutivos.")
            break

    