#Crie um programa com uma função de soma, que some todos os números inseridos dentro dela.

def soma(*numero):
    s=0
    for n in numero:
        s=s+n
    print(f"A soma dos valores {numero} é {s}.")


soma(2,15,27,42)