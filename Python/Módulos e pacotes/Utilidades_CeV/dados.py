def leianumero(num):
    válido = False
    while not válido:
        valor=input(num).replace(",", ".")
        if valor.isalpha() or valor.strip()=="":
            print("Valor inválido!")
        else:
            válido=True
            return float(valor)



