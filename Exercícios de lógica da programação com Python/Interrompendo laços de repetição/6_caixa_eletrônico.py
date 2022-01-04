#CRIE UM PROGRAMA QUE SIMULE UM CAIXA ELETRÔNICO:recebe um valor e informa quantas notas de 10, 50, 20, 10, 5 e 2 são necessárias para o pagamento.


saque=int(input("Quanto você deseja sacar?"))

total=saque
tipo_de_nota=100
qtde_notas=0

while True:

    if total>=tipo_de_nota:
        total=total-tipo_de_nota
        qtde_notas=qtde_notas+1

    else:  
        if qtde_notas != 0:
            print(f"{qtde_notas} notas de {tipo_de_nota}.")

        if tipo_de_nota==100:
            tipo_de_nota=50
        
        elif tipo_de_nota == 50:
            tipo_de_nota = 20

        elif tipo_de_nota == 20:
            tipo_de_nota = 10

        elif tipo_de_nota == 10:
            tipo_de_nota=5

        elif tipo_de_nota == 5:
            tipo_de_nota = 2

        qtde_notas=0

        if total < 2:
            break
