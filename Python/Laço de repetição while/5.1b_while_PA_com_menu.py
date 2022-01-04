
ti=int(input("Digite o termo inicial de uma progressão aritmética:"))
rz=int(input("Agora, digite a razão da PA:"))

qtd=int(input("Digite quantos termos da PA deseja exibir:"))

cont=1

add=1
while add!=0:
    while cont <=qtd:
        print(ti, end="->")
        ti=ti+rz
        cont=cont+1
    print("PAUSA")
    add=int(input("Quantos termos mais você gostaria de visualizar?"))
    qtd=qtd+add


print(F"FIM. Foram exibidos {qtd} termos da PA.")