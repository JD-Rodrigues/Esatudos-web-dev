#Crie um programa que receba a idade e sexo de várias pessoas e, no final, informe quantas das pessoas cadastradas são menores de idade, a quantidade de homens e o número de mulheres com idade menor que 20 anos.

maiores=0
homens=0
mm20=0

while True:
    idade=int(input("Idade da pessoa:"))
    sexo=input("Sexo da pessoa: (M/F)").upper()

    while sexo != "M" and sexo != "F":
        sexo=input("Opção inválida! Digite o sexo da pessoa: (M/F)").upper()

    if idade >= 18:
        maiores=maiores+1

    if sexo == "M":
        homens=homens+1

    elif sexo == "F":
        if idade < 20:
            mm20=mm20+1

    s_n=input("Gostaria de cadastrar uma nova pessoa? (S/N)").upper()
    while s_n != "S" and s_n != "N":
            s_n=input("Opção inválida! Gostaria de cadastrar uma nova pessoa? (S/N)").upper()
    
    if s_n == "N":
            print(f"FINALIZADO. \n Das pessoas cadastradas,{maiores} são maiores de idade, {homens} são homens e {mm20} são mulheres com menos de 20 anos.")
            break
