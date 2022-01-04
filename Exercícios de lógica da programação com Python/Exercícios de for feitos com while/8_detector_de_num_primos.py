

primos=0
cont=1

num=int(input("Digite um número para saber se é primo:"))

while cont <= num:
    if num % cont == 0:
        primos=primos+1
    cont=cont+1

if primos==2:
    print("Este número é primo.")

else:
    print("Este número não é primo.")