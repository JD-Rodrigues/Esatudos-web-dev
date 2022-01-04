

frutas=("abacaxi", "manga", "uva", "banana", "tangerina", "mamao", "limao", "laranja", "goiaba", "melancia", "melao")



for pos, fruta in enumerate(frutas):
    print(f"Em {fruta.upper()}, temos:", end=" ")
    for letra in fruta:
        if letra in "aeiou":
            print(letra, end=" ")


            
    print("\n")