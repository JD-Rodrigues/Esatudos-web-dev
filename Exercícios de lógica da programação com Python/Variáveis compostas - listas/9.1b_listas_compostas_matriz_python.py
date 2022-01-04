#Aprimore o desafio anterior, mostrando no final: 
# a) A soma de todos os valores pares digitados;
# b) A soma dos valores da terceira coluna;
# c) O maior valor da segunda linha.

matriz=[[0,0,0], [0,0,0], [0,0,0]]
soma_par=0
soma_ter_col=0

for l in range(0,3):
    for c in range(0,3):
        matriz[l][c]=int(input(f"Digite um número para {l}, {c}: "))
        if matriz[l][c] % 2 == 0:
            soma_par=soma_par+matriz[l][c]
        if c == 2:
            soma_ter_col=soma_ter_col + matriz[l][c]

print("=-"*25)

for l in range(0,3):
    for c in range(0,3):
        print(f"[ {matriz[l][c]} ]", end="  ")
    print()


print(f"A soma de todos os valores pares digitados é {soma_par}.")
print(f"A soma dos valores da terceira coluna é {soma_ter_col}.")
print(f"O maior valor da segunda linha é {max(matriz[1])}")