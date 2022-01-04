

cont=1
while True:
    num=int(input("Digite um número para exibir a tabuada:"))
    while cont <= 10:
        if num < 0:
            print("FIM.")
            break
        print(f"{num} x {cont} = {num*cont}")
        cont=cont+1

    cont=1
        