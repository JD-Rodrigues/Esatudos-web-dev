soma=0
cont=1
while cont<=6:
    if cont == 1:
        num=int(input("Digite um número:" ))
    else:
        num=int(input("Digite outro número:"))
    soma+=num
    cont+=1

print(f"A soma destes números é {soma}.")
