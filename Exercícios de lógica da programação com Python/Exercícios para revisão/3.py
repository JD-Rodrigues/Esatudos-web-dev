#Crie um programa com uma função que, ao receber o comprimendo e largura de um terreno, calcule e exiba sua área. 

def area(comp, larg):
    a=comp*larg

    return a

res=area(comp=int(input("Comprimento:")), larg=int(input("Largura:")))

print(f"A área do terreno é {res} m.")