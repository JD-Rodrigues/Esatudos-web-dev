#Crie um programa que receba do usuário uma quantidade de palpites para jogos da  Megasena e os exiba. Cada palpite será uma lista com 6 números aleatórios de 1 a 60.

from random import randint
from time import sleep

jogos=[]
temp=[]

limit=int(input("Quantos palpites deseja visualizar?"))

quant=1

while quant <= limit:
    tot=0
    while True:
        num=randint(1,60)
        if num not in temp:
            temp.append(num)
            tot=tot+1
        if tot==6:
            break

    temp.sort()
    jogos.append(temp[:])
    temp.clear()
    quant=quant+1



for i, v in enumerate(jogos):
    sleep(0.7)
    print(f"Jogo{i}: {v}")


