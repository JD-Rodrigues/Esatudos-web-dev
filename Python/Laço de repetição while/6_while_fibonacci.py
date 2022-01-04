#Escreva um programa que receba do usuário determinada quantidade de termos da sequência de Fibonacci que deverá exibir e responda essa solicitação.


t1=0
t2=1
t3=t2+t1



num=int(input("Digite quantos termos da sequência de Fibonacci você quer ver:"))

print(f"0-->1", end="")

cont=2

while cont < num:
    print(f"-->{t3}", end="")
    t1=t2
    t2=t3
    t3=t2+t1

    cont=cont+1

print("...")
    
    