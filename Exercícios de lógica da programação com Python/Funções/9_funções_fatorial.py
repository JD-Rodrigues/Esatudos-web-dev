#Crie um programa com uma função que calcule o fatorial de um número. A função terá 2 parâmetros: "num" e um parâmetro lógico opcional que, quando for True, exiba todo o processo de cálculo. Se for False ou inexistente, o programa exibirá apenas o resultado (fatorial do número).

def fatorial(num, show=False):
    fat=1
    processo=[]
    
    for f in range(num, 0, -1):
        fat=fat*f
        if show == True:
            processo.append(f)
            if f != 1:
                processo.append("x")
            else:
                processo.append("=")
    processo.append(fat)

    return processo
    
proc=fatorial(8)

print("=-"*25)
for i, v in enumerate(proc):
    
    print(v, end=" ")



