#Crie um programa com uma função que dobre o valor dos números de uma lista.

def dobro_lista(lst):
    for i, v in enumerate(lst):
        lst[i]=v*2
     

lista=[1,2,3,4,5,6]

dobro_lista(lista)
print(lista)