#Crie um programa que contenha uma tupla com várias palavras e, ao ser executado, informe quais vogais existem em cada palavra.

frutas=("abacaxi", "manga", "uva", "banana", "tangerina", "mamao", "limao", "laranja", "goiaba", "melancia", "melao")


for pos, fruta in enumerate(frutas):
    print(f"Em {fruta.upper()}, temos:", end=" ")

    for pos, letra in enumerate(fruta):
        if letra in "AaEeIiOoUu":
            print(letra, end=" ")
    print("\n")