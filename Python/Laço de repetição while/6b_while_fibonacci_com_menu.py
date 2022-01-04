# #Escreva um programa que receba do usuário determinada quantidade de termos da sequência de Fibonacci que deverá exibir e responda essa solicitação. m seguida, será dada ao usuário a oportunidade de visualizar uma quantidade de termos adicionais desejada, e isso acontecerá até que ele insira o valor 0. No final, o programa terá exibido todos os termos solicitados pelo usuário e, também, exibirá a quantidade deles junto à mensagem de finalização.


t1=0
t2=1
t3=1



mais = 10

num=int(input("Digite quantos termos da sequência de Fibonacci você quer ver:"))

qtd_termos=num

print(f"{t1}-->{t2}-->", end="")

cont=2

while mais != 0:
  
    while cont < qtd_termos:
        print(f"{t3}", end="-->")
        t1=t2
        t2=t3
        t3=t2+t1
        cont=cont+1

    print("PAUSA")

    mais=int(input("Quantos termos mais você gostaria de exibir?"))

    qtd_termos=qtd_termos+mais
    
 
        
print(f"FIM.  {qtd_termos} termos foram exibidos.")




    
    