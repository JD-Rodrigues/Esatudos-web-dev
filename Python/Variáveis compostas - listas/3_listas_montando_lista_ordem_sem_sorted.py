
lista=[]

for c in range(1,6):
    num=int(input("Digite um número:"))
    if c == 1:
        lista.append(num)
        print("Adicionado à posição 0.")
    elif c == 2:
        if num >= max(lista):
            lista.append(num)
            print("Adicionado no final da lista.")
        else:
            lista.insert(0,num)
            print("Adicionado ao início da lista.")
    elif c == 3:
        if num >= max(lista):
            lista.append(num)
            print("Adicionado no final da lista.")
        elif num <= min(lista):
            lista.insert(0, num)
            print("Adicionado ao início da lista.")
        else:
            lista.insert(1, num)
            print("Adicionado à posição 1.")
    elif c == 4:
        if num >= max(lista):
            lista.append(num)
            print("Adicionado no final da lista.")
        elif num <= min(lista):
            lista.insert(0, num)
            print("Adicionado ao início da lista.")
        elif num >= lista(1):
            lista.insert(2,num)
            print("Adicionado à posição 2.")
        else:
            lista.insert(1, num)
            print("Adicionado à posição 1.")
    elif c == 5:
        if num >= max(lista):
            lista.append(num)
            print("Adicionado no final da lista.")
        elif num <= min(lista):
            lista.insert(0, num)
            print("Adicionado ao início da lista.")
        elif num >= lista[1]:
            lista.insert(2,num)
            print("Adicionado à posição 2.")
        elif num <= lista[1]:
            lista.insert(1, num)
            print("Adicionado à posição 1.")
        elif num >= lista[2]:
            lista.insert(3,num)
            print("Adicionado à posição 3.")
        elif num <= lista[2]:
            lista.insert(2, num)
            print("Adicionado à posição 2.")

print(f"Os números, em ordem, são: {lista}")


