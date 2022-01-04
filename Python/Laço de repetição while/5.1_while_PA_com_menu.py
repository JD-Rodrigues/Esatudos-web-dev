#Crie um programa que receba o termo inicial e a razão de uma progressão aritmética e, como resultado, exiba os 10 primeiros termos dessa PA. Em seguida, será dada ao usuário a oportunidade de visualizar uma quantidade de termos adicionais desejada, e isso acontecerá até que ele insira o valor 0. No final, o programa terá exibido todos os termos solicitados pelo usuário e, também, exibirá a quantidade deles junto à mensagem de finalização.

print("#"*40)

ti=int(input("Digite o termo inicial da PA:"))
rz=int(input("Digite a razão da PA:"))

qtd_termos=10
cont=0
mais=10

print("#"*40)
print("Os 10 primeiros termos são:")

while mais != 0:   
    while cont < qtd_termos:
        print(f"{ti}", end="-->")
        cont=cont+1
        ti=ti+rz
    print("PAUSA")
    mais=int(input("Digite quantos termos mais você gostaria de visualizar:"))  
    qtd_termos=qtd_termos+mais

    if mais==0:
        print(f"FIM. \n {qtd_termos} termos foram exibidos.")