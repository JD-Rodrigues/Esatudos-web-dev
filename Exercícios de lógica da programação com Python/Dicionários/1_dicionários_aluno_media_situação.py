#Crie um programa que receba nome e média de um aluno, armazene-os em um dicionário e mostre: "A média do aluno __ é:__. Situação do aluno: APROVADO/REPROVADO.


aluno={}

aluno['nome']=input("Nome do aluno:")
aluno['média']=float(input("Média do aluno:"))

print(f"\n {'-'*20} \n A média de  {aluno['nome']} é {aluno['média']}. \n {'-'*20}.")

if aluno['média'] >= 5:
    print(f"A situação do aluno é: APROVADO.")
else:
    print(f"\n Situação do aluno: REPROVADO.")

