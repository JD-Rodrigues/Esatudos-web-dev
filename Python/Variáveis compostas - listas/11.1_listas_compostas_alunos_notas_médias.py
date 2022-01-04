
dados=[]



while True:
    nome=input("Nome:")
    nota1=float(input("Nota 1:"))
    nota2=float(input("Nota 2:"))
    média=(nota1+nota2)/2
    dados.append([nome, [nota1, nota2], média])

    option=input("Gostaria de cadastrar notas de mais um aluno?").upper()

    while option != "S" and option != "N":
        option=input("Oção inválida! Gostaria de cadastrar notas de mais um aluno?").upper()

    if option == "N":
        break

print("=-"*20)
print(f'{"Nº":<0}   {"ALUNO":<0}   {"MÉDIA":>12}')
print("=-"*20)

for i, v in enumerate(dados):
    print(f"{i :<4} {v[0] :<10} {v[2]:>8.1f}")

while True:
    num=int(input("Digite o número de um aluno para ver suas notas. [999 - Encerra]"))
    if num==999:
        break

    if num <= len(dados):
        print(f"As notas de {dados[num][0]} são: {dados[num][1]}.")