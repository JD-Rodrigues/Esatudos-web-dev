from random import randint

n1=randint(0,9)
n2=randint(0,9)
n3=randint(0,9)
n4=randint(0,9)
n5=randint(0,9)

tupla=n1,n2,n3,n4,n5

maior=0
menor=0

for pos, numero in enumerate(tupla):
    if pos == 0:
        maior=numero
        menor=numero

    else:
        if numero > maior:
            maior=numero
        elif numero < menor:
            menor = numero

print(f"Os números sorteados foram: {tupla}. O maior foi {maior} e o menor foi {menor}.")
