def dobro(num=0, format=False):
    dob=num*2

    if format==True:
        return currency(dob)
    else:
        return dob

def metade(num=0, format=False):
    met=num/2

    if format==True:
        return currency(met)
    else:
        return met

def aumento(num=0,format=False, taxa=10):
    aum=num+(num*taxa/100)

    if format==True:
        return currency(aum)
    else:
        return aum

def redução(num=0,format=False, taxa=15):
    red=num-(num*taxa/100)

    if format == True:
        return currency(red)
    else:
        return red

def currency(preço=0, moeda="R$"):
    return f"{moeda} {preço:.2f}".replace(".", ",")