#Crue um programa que receba um número de 1 a 20 e devolva seu nome, por extenso.

num=30
num_ext= "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"


while num >20 or num <0:
    num=int(input("Digite um número entre 0 e 20:"))

print(f"Você digitou o número {num_ext[num]}.")