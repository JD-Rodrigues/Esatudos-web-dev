
#Crie um programa que receba o nome e preço de vários produtos e, no final, informe o valor total da compra, quantos produtos têm valor  acima de mil reais e o nome do produto mais barato.



total=0
maisdemil= 0
cheapername=""
menor=0
cont=0
print("="*30)
while True:
    prod=input("Produto:")
    price=float(input("Preço:"))    

    cont=cont+1
    total=total+price 
    if cont == 1 or price < menor:
        menor=price
        cheapername=prod
    
    if price > 1000:
        maisdemil=maisdemil+1

    s_n=input("Gostaria de inserir mais um produto? (S/N)").upper()
    if s_n == "N":
        print(f"O total de sua compra é R${total}. {maisdemil} dos produtos tem valor maior que R$ 1.000. O produto mais barato foi {cheapername.upper()}.")
        break
    while s_n != "S" and s_n != "N":
        s_n=input("Dado inválido!Gostaria de inserir mais um produto? (S/N)").upper()

