#Crie um programa que receba um número e mostre seu fatorial.

num=int(input("Digite um número para calcular seu fatorial:"))

fat=1
for c in range(1,num+1):
    fat=fat*c
   
print(fat)