#Crie um programa com duas funções: uma que sorteie 5 números, de 0 a 9 e os exiba na tela, e outra que some apenas os números pares dentre os sorteados e também os exiba.

from time import sleep
from random import randint

lista=[]


def sort():
    for c in range(0,5):
        lista.append(randint(0,9))
    sleep(0.7)
    print("=-"*25)
    sleep(0.7)
    print("Sorteando os números...")
    sleep(1)
    for n in lista:
        sleep(0.8)
        print(n, end=" ")
    print("...PRONTO!")

def soma_par():
    soma_pares=0
    for n in lista:
        if n % 2 == 0:
            soma_pares=soma_pares+n
    sleep(0.8)
    print("=-"*25)
    sleep(0.7)
    print(f"Somando os valores de {lista}, temos {soma_pares}.")

sort()
soma_par()