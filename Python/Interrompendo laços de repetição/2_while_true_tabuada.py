#Crie um programa utilizando "while True" e "break" que receba um número e mostre sua tabuada.


while True:
    num=int(input("Digite um número para exibir a tabuada:"))
    for c in range (1,11):
        if num < 0:
            print("FIM.")
            break
        print(f"{num} x {c} = {num*c}")
        