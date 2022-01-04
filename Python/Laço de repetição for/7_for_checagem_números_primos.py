#Crie um programa que receba um número e diga se ele é primo ou não. 

num=int(input("Digite um número para checar se ele é primo."))
total=0

for c in range(1, num+1):
    if num % c == 0:
        total=total+1
if total == 2:
    print(f"Este número é divisível apenas por {total} números. Ele é um número primo!")
else:
    print(f"Este número é divisível por {total} números! Ele não é primo.")

