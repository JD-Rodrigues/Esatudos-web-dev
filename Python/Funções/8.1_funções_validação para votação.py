#Crie um programa com uma função voto() e que tenha como parâmetro a data de nascimento do usuŕario. Como resultado, informará se o voto é FACULTATIVO, NEGADO ou OBRIGATÓRIO para ele.

def voto(ano):
    from datetime import date
    atual=date.today().year
    idade = atual-ano

    if idade < 16:
        return f"Com {idade} anos você ainda não vota."
    elif idade < 18:
        return f"Com {idade} anos o voto é OPCIONAL."
    elif idade >=70:
        return f"Com {idade} anos, o voto é OPCIONAL."
    else:
        return f"com {idade} anos o voto é OBRIGATÓRIO!"

print("=-"*25)
nasc = int(input("Qual seu ano de nascimento?"))
print("=-"*25)
print(voto(nasc))