
num_ext= "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"

while True:
    
    num=int(input("Digite um número entre 0 e 20:"))

    print(f"Você digitou o número {num_ext[num]}.")

    sn=input("Você gostaria de continuar? (S/N)").upper()
    if sn == "N":
        print("FIM.")
        break