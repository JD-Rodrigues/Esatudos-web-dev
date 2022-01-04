#Crie um programa com uma função voto() e que tenha como parâmetro a data de nascimento do usuŕario. Como resultado, informará se o voto é FACULTATIVO, NEGADO ou OBRIGATÓRIO para ele.


def voto(nasc):
    condição=""
    if 2021- nasc < 16:
        condição = "negado"
    elif 2021 - nasc > 70:
        condição = "opcional"
    else:
        condição = "obrigatório"

    return condição


ver= voto(int(input("Qual seu ano de nascimento?")))

print(f"O voto para você é {ver}.")