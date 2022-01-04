#Crie um programa com uma função que dobre o valor dos números de uma lista.

def dobro(lst):
    pos = 0
    while pos < len(lst):
        lst[pos] = lst[pos] * 2
        pos = pos + 1


lista = [5, 0, 2, 1, 4, 8]

dobro(lista)
print(lista)