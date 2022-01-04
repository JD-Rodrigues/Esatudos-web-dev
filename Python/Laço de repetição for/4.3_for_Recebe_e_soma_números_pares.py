#Crie um programa que recebe 6 números 
# e exibe a soma apenas dos pares.

soma=0

for c in range(1,7):
    n=int(input())
    if n % 2 == 0:
       soma=soma+n

print(soma) 