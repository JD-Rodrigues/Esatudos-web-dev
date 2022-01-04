#Crie um programa com uma função que calcule o fatorial de um número. A função terá 2 parâmetros: "num" e um parâmetro lógico opcional que, quando for True, exiba todo o processo de cálculo. Se for False ou inexistente, o programa exibirá apenas o resultado (fatorial do número).

def fatorial(num, show=False):
    fat=1
    for c in range(num, 0, -1):
        fat=fat*c
        if show == True:
            print(c, end=" ")
            if c >1:
                print("x", end= " ")
            else:
                print("=", end= " ")
    print(fat)


fatorial(6, True)