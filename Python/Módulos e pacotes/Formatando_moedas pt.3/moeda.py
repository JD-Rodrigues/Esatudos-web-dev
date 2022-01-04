def dobro(num=0):
    dob=num*2

    return currency(dob)
    
def metade(num=0):
    met=num/2

    return currency(met)

def aumento(num=0,taxa=0):
    aum=num+(num*taxa/100)

    return currency(aum)
    

def redução(num=0, taxa=0):
    red=num-(num*taxa/100)

    return currency(red)
    
def currency(preço=0, moeda="R$"):
    return f"{moeda} {preço:.2f}".replace(".", ",")

def resumo(p, ta=0, tr=0):
    print("-"*40)
    print("            RESUMO DO VALOR")
    print("-"*40)

    print(f"Preço analisado:       {currency(p):>17}")
    print(f"Dobro do preço:        {dobro(p):>17}")
    print(f"Metade do preço:       {metade(p):>17}")
    print(f"{ta}% de aumento:      {aumento(p, ta):>18}")
    print(f"{tr}% de redução:     {redução(p, tr):>19}")

    