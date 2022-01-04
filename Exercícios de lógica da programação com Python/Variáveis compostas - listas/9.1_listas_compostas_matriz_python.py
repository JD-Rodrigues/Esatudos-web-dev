#Aprimore o desafio anterior, mostrando no final: 
# a) A soma de todos os valores pares digitados;
# b) A soma dos valores da terceira coluna;
# c) O maior valor da segunda linha.

matriz=[[0,0,0],[0,0,0],[0,0,0]]

som_pares= soma_ter_col= maior_seg= 0

for l in range(0,3):
    for c in range(0,3):
        matriz[l][c]=int(input(f"Digite um número para [{l},{c}]:"))
print("=-"*20)
for l in range(0,3):
    for c in range (0,3):
        print(f"[{matriz[l][c]:^5}]", end=" ")
    print()

print("=-"*20)

for l in range(0,3):
    for c in range(0,3):
        if matriz [l][c] % 2 == 0:
            som_pares=som_pares + matriz[l][c]

for l in range(0,3):
    soma_ter_col=soma_ter_col+matriz[l][2]

for l in range(0,3):
    if l == 0:
        maior_seg=matriz[1][l]
    else:
        if matriz[1][l]>maior_seg:
            maior_seg=matriz[1][l]



print(f"A soma dos números pares é {som_pares}. \n A soma dos valores da terceira coluna é: {soma_ter_col}.\n O maior valor da segunda linha é {maior_seg}.")