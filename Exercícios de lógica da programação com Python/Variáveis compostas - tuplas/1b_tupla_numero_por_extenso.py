
num=30
num_ext= "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"

while num >20 or num <0:
    num=int(input("Digite um número entre 0 e 20:"))

for pos, numero in enumerate (num_ext):
    if pos == num:
        print(f"Você digitou o número {numero}.") 