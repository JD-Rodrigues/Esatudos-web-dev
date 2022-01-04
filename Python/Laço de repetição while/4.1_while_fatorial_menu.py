


fat=1
cont=1

sn="S"

while sn != "N":
    num=int(input("Digite um número para calcular o fatorial:"))
    while cont <= num:
        fat=fat*cont
        cont=cont+1
    print(f"O fatorial de {num} é {fat}.")

    sn=(input("Gostaria de calcular o fatorial de outro número? [S/N]")).upper()
    

if sn== "N":
    print("FIM.")
    
    

