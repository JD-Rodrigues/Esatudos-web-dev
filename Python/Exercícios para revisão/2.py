#Crie um programa com uma função de soma, que some todos os números inseridos dentro dela.

def soma(*numero):
    s=0
    for i, v in enumerate(numero):
        s=s+v

    return s

print()

print(soma(1,2,3,4,5,6))