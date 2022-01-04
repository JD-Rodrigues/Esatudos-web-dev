#Crie um propgrama aprimorando o do exercício 4. Dessa vez, o programa terá um menu, com um código para cada jogador. O usuário digitará o código, do jogador para visualizar sua produtividade. O resultado, será algo semelhante a:  
#PRODUTIVIDADE DO JOGADOR ___
#No jogo __ fez __ gols. (Mostrando o número de gols em cada um dos jogos que participou)

geral=[]
gols=[]

while True:
    cadastro={'nome':input("Nome do jogador:"), 'gols': [], 'total':int(input("Total de partidas jogadas:"))}

    
    for gol in range(1,cadastro['total']+1):
        gols.append(int(input(f"Quantos gols no jogo {gol}?")))
    cadastro['gols']=gols[:]
    gols.clear()

    geral.append(cadastro.copy())
    
    



    sn=input("Quer continuar? S/N")
    while sn not in "SsNn":
        sn=input("Opção inválida! Quer continuar? S/N")
    if sn in "Nn":
        break

print(geral)
print("=-"*25)
print("cód", end=" ")
for k in cadastro.keys():
    print(k, end=" ")
print(f"\n{'-'*50}")

for i, v in enumerate(geral):
    print(f"\n{i}  ", end="   ")
    for d in v.values():
        print(d, end="      ")




while True:
    opc=int(input(f"\n{'-'*50} \n Digite o código para acessar a produtividade do jogador. (999 Encerra)"))
    if opc == 999:
        break

    while opc >= len(geral):
        opc=int(input(f"{'-'*50}\n Opção inválida. Digite o código de 0 a {len(geral)-1} para acessar a produtividade do jogador. (999 Encerra)"))
        

    print("-"*50)
    print(f"PRODUTIVIDADE DO JOGADOR {geral[opc]['nome']}:")
    print("-"*50)

    for i, v in enumerate(geral[opc]['gols']):
        print(f"No jogo {i+1} fez {v} gols.")


