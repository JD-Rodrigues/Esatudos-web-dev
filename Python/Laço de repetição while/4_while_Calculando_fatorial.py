#Crie um programa que receba um número e calcule o seu fatorial, utilizando o laço de repetição while.

n=int(input("Digite um número para calcular o seu fatorial:"))
num=n
fat=1

while num != 1:
    fat=fat*num
    num=num-1

print(f"O fatorial de {n} é {fat}.")