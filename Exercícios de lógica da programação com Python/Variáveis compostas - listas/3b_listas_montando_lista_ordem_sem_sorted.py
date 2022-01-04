#Crie um programa que receba 5 números e os armazene numa lista, já em prdem crescente, sem utilizar a função sort(). A cada número adicionado, ele informará em que posição da lista o adicionou.

lista=[]

for c in range (0,5):
    n=int(input("Digite um número:"))
    if c == 0 or n > lista[-1]:
        lista.append(n)
    else:
        pos=0
        while pos < len(lista):
            if n <= lista[pos]:
                lista.insert(pos, n)
                break
            pos=pos+1
print(f"A lista em ordem é: {lista}.")