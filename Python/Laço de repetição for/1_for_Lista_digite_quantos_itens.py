#Crie um programa que crie uma lista cuja quantidade
# de intens seja indicada pelo usuário. Obs: mostra
# apenas números ímpares


num=int (input('Digite um número natural, que indique o número de itens da lista:'))

valor_inicial=1



for numero in range(valor_inicial,num+1,2):
  print(numero)
