#Crie um programa que receba uma expressão matemática com parênteses e informe se a expressão está correta, com base na abertura e fechamento dos parênteses. 

exp=input("Digite uma expressão matemática:")
par=[]
for simb in exp:
    if simb == "(":
        par.append(simb)
    elif simb ==")":
        if len(par) > 0:
            par.pop()
            
        else:
            par.append(")")
            break

print(len(par))

if len(par) == 0:
    print("A expressão é válida.")
else:
    print("A expressão é inválida.")
