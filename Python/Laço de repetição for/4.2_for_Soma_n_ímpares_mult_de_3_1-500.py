#Faça um programa que calcula a soma entre todos
#os números ímpares que são múltiplos de 3 e que
# se encontram entre 1 e 500

s=0

for c in range(1,500,2):
    if c % 3 == 0:
        s=s+c

print(s)