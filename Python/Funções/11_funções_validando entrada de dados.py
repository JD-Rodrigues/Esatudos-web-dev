#Crie um programa com uma função notas() e dois 2 parâmetros: um deles receberá diversos números (notas) e o outro, opcional, exibirá a situação do aluno como BOA, RUIM ou REGULAR.

def notas(*n, situation=False):
    
    sit={}  

    sit["Total"]=len(n)
    sit["Maior"]=max(n)
    sit["Menor"]=min(n)
    sit["Média"]=sum(n)/len(n)
    
    if situation == True:
        if sit["Média"]< 5:
            sit["Situação"]= "RUIM"
        elif sit["Média"]==5:
            sit["Situação"] = "REGULAR"
        else:
            sit["Situação"] = "BOM"

    return sit




status= notas(1,2,3,4,5, situation=True)

print(status)