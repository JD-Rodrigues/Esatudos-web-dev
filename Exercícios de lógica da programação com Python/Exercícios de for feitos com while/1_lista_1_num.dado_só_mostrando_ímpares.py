num=int(input("Insira um número até onde sua lista se estenderá:"))
cont=1
while cont < num+1:
    if cont % 2 != 0:
        print(cont)
    cont+=1