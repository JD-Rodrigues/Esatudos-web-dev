def lin():
    print('=-'*25)

#Crie um programa com uma função que, ao receber o comprimendo e largura de um terreno, calcule e exiba sua área. 

def area(a,b):
    terreno=a*b
    lin()
    print(f"A área do terreno é {terreno}m.")

area(float(input("Qual o comprimento do terreno?")), float(input("Qual a largura do terreno?")))