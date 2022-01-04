def dobro(num=0):
    dob=num*2

    return dob

def metade(num=0):
    met=num/2

    return met

def aumento(num=0,taxa=0):
    aum=num+(num*taxa/100)

    return aum

def redução(num=0, taxa=0):
    red=num-(num*taxa/100)

    return red

def currency(preço=0, moeda="R$"):
    return f"{moeda} {preço:.2f}".replace(".", ",")
