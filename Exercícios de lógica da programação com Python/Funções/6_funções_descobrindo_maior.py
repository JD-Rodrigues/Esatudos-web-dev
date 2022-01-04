#Crie um programa com uma função com parâmetro de desempacotamento que, quando chamada analise os números, diga quantos números foram dados e qual o maior deles.

from time import sleep

def maior(*num):
    print("=-"*25)
    print("Analisando os números...")
    sleep(1.5)
    for n in num:
        print(f"{n}", end=" ")
        sleep(0.7)
    print(f"... Foram dados {len(num)} números.")
    sleep(1)
    print(f"O maior número foi {max(num)}.")


maior(2,33,25,12,14)

maior(15,0,8,9,11)