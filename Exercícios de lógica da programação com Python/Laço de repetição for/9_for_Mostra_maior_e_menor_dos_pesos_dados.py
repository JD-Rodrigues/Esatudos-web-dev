#Crie um programa que receba 5 pesos e, no final, informe qual 
# foi o menor e o maior peso dado.

maior=0
menor=0

for p in range(1,6):
    peso=int(input(f"Digite o peso {p}:"))
    if p==1:
        maior=peso
        menor=peso
    else:
        if peso>maior:
            maior=peso
        if peso<menor:
            menor=peso

print(f'O menor peso digitado é {menor}kg e o maior é {maior}kg.')