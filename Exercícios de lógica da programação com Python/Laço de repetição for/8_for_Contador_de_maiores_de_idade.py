#Crie um programa que receba o ano de nascimento de 7 pessoas e,
# no final, informe quantas destas pessoas já são maiores 
# de idade.

maiores=0



for p in range(1,8):
    ano=int(input(f"Digite o ano de nascimento da pessoa {p}:"))
    if ano<=2003:
        maiores=maiores+1
    
print(f'{maiores} das pessoas cuja data de nasc. foi inserida acima, são maiores de idade.')
