#Crie um programa com "for" que receba um número 
# e mostre sua tabuada de multiplicação de 1 a 10.

num=int(input("Digite um número p/ exibir sua tabuada de multiplicação:"))
mult=1

for c in range(1,11):
    print(f"{num} x {mult} = {num*mult} ")
    mult=mult+1
