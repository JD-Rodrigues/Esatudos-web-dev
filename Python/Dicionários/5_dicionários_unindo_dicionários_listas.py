#Crie um programa que receba nome, sexo e idade de várias pessoas. Em seguida, ele mostrará:
# O número de pessoas cadastradas
# A média de idade das pessoas cadastradas;
# O número de mulheres cadastradas;
# Os nomes das pessoas que estão acima da média de idade.

cadastro=[]
soma_idades=0

while True:
    cad={'nome': input("Nome:"), 'sexo':input("Sexo: [M/F]"), 'idade': int(input("Idade:"))}

    cadastro.append(cad)

    sn=input("Gostaria de continuar? S/N")
    while sn not in "NnSs":
        sn=input("Oção inválida! Gostaria de continuar? S/N")
    if sn in "Nn":
        break

print('=-'*25)
print(f" - O grupo tem {len(cadastro)} pessoas.")

for p in cadastro:
    soma_idades=soma_idades+p['idade']

print(f" - A média de idade é de {soma_idades/len(cadastro): .2f} anos.\n - As mulheres cadastradas foram:", end=" ")

for p in cadastro:
    if p['sexo'] == 'F':
        print(p['nome'], end="  ")

print()
print("\n- Lista das pessoas que estão acima da média:")

for p in cadastro:
    if p['idade'] > soma_idades/len(cadastro):
        print(f"   Nome: {p['nome']}; Sexo: {p['sexo']}; Idade: {p['idade']}")

print("=-"*25)
print("FINALIZADO.")

