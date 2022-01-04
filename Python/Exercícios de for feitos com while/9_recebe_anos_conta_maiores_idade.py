maiores=0

cont=1

while cont <= 7:
    ano=int(input(f"Digite o ano de nascimento da pessoa {cont}:"))
    if ano<=2003:
        maiores=maiores+1

    cont=cont+1
    
print(f'{maiores} das pessoas cuja data de nasc. foi inserida acima, são maiores de idade.')
