#Crie um programa que receba do usuário uma quantidade de palpites para jogos da  Megasena e os exiba. Cada palpite será uma lista com 6 números aleatórios de 1 a 60.

import random
from time import sleep

limit=int(input("Quantos palpites para Megasena você gostaria de realizar?"))

print("=-"*20)

for c in range (1,limit+1):
    num=random.sample(range(1,61),6)
    sleep(0.7)
    print(f"Jogo {c}: {num}")
    
