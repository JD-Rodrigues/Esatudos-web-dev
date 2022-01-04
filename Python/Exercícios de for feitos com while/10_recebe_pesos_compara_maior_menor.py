


maior=0
menor=0
cont=1

while cont <= 5:
    num=int(input("Digite um peso:"))
    if cont == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        elif num < menor:
            menor = num

    cont= cont+1

print (f"O maior peso é {maior} e o menor é {menor}.")