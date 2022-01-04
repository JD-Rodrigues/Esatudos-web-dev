#Crie um programa que receba o nome e o valor da doação feita por cada pessoa e adicione esses nomes numa lista de sorteio, sendo que a cada 10 reais, a pessoa tem o direito de ter seu nome inserido na lista. No final, exiba essa lista.

lista=[]

while True:
    nome=input("Digite seu nome:")
    valor_doado=int(input("Faça uma doação:"))

    for c in range(0,valor_doado//10):
	    lista.append(nome)
    
    sn=input("Gostaria de fazer uma doação? S/N").upper()

    if sn == "N":
            break



print(f"Lista para sorteio: \n{lista}")