ant=0
atual=1
prox=1


num=int(input("Digite quantos termos da sequência de Fibonacci você quer ver:"))

print(f"{ant}", end="-->")

for c in range (1,num):
    print(f"{prox}", end="-->")
    ant=atual
    atual=prox
    prox=atual+ant

print("...")
