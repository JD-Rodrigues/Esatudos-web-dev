soma=0
cont=1
while cont <=6:
    if cont == 1:
        num=int(input("Digite um número:"))
    else:
        num=int(input("Digite mais um número:"))

    if num % 2 == 0:
        soma=soma+num

    cont=cont+1

print(f"A soma dos pares é {soma}:")