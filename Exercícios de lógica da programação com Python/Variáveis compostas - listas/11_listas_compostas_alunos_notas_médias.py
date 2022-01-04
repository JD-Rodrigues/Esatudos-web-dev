#Crie um programa que cadastre vários aluinos, recebendo o nome e duas notas de vários alunos e, no final, exiba, de forma organizada, o número de cada aluno cadastrado, nome e média. Após isso, o usuário poderá digitar o número do aluno e ter acesso às suas duas notas.

lista_geral=[]

dados_alunos=[]
aluno=[]
notas=[]

while True:
    aluno.append(input("Nome do aluno:"))
    notas.append(float(input("Nota 1:")))
    notas.append(float(input("Nota 2:")))
    dados_alunos.append(aluno[:])
    dados_alunos.append(notas[:])
    lista_geral.append(dados_alunos[:])
    aluno.clear()
    notas.clear()
    dados_alunos.clear()

    sn=(input("Gostaria de cadastrar outro aluno? S/N")).upper()
    
    while sn != "S" and sn != "N":
        sn=(input("Opção inválida! Gostaria de cadastrar outro aluno? S/N")).upper()
    if sn == "N":
        break

print("=-"*20)
print(f"Nº   ALUNO   MÉDIA")
print("=-"*20)

for i,v in enumerate(lista_geral):
    print(f"{i,   v[0],   (v[1][0]+v[1][1])/2}")

while True:
    nt=int(input("Digite o número do aluno para ver as notas. (999 encerra)"))
    if nt == 999:
        print("=-"*20)
        print("FIM.")
        break
    for i, v in enumerate(lista_geral):
        if nt == i:
            print(f"As notas de {v[0]} são: {v[1]}")

