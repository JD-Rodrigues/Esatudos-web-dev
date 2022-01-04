#Crie um programa que receba o nome, idade e sexo de 4 pessoas e mostre a média de idade delas, o nome do homem mais velho e o número de mulheres com idade menor que 20 anos.


maior=0
mm20=0
sumage=0
nameolderman=str('')

for p in range(1,5):
    nome=str(input(f"Digite o nome da pessoa {p}:"))
    idade=int(input(f"Digite a idade da pessoa {p}:"))
    sexo=input(f"Digite o sexo (M/F) da pessoa {p}:")

    sumage=sumage+idade

    if sexo==("M"):
        if idade>maior:
            maior=idade
            nameolderman=nome

    if sexo==("F"):
        if idade<20:
            mm20=mm20+1


    
print(f"A média de idade de todas estas pessoas é {sumage//4}. O homem mais velho é {nameolderman}. Há {mm20} mulheres com idade menor que 20 anos.")