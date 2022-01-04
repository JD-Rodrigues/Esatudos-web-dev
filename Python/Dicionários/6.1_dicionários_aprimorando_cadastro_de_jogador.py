from time import sleep
relatorio=[]
dados={}
gols=[]

while True:
    dados["nome"]=input("Nome do jogador: ")
    dados["partidas"]=int(input("Nº de partidas jogadas: "))

    for c in range(0,dados["partidas"]):
        gols.append(int(input(f"Nº de gols no jogo {c+1}: ")))

    dados["gols"]=gols[:]
    relatorio.append(dados.copy())
    gols.clear()
    dados.clear()

    sn=input("Cadastrar mais um jogador? [S/N]").upper()
    if sn=="N":
        break

sleep(0.6)
print()

while True:
    print("Para visualizar a produtividade, digite o número referente a cada jogador:")
    print()
    sleep(1)

    for i, v in enumerate(relatorio):
        print(f"[{i+1}] {v['nome']}")
        sleep(1)
    print()
    cod=int(input(""))
    sleep(1)
    print()
    sleep(1)
    print(f"{20*'-='}")
    print(f"Produtividade do jogador {relatorio[cod-1]['nome']}")
    print(f"{20*'-='}")
    print()
    sleep(1)
    print(f"Nº de partidas jogadas: {relatorio[cod-1]['partidas']}")
    sleep(1)
    print()
    print(f"N° de gols por partida: ")
    print()
    sleep(1)

    for i, v in enumerate(relatorio[cod-1]["gols"]):
        print(f"Jogo {i+1}: {v} gols")
        print()
        sleep(1)

    yn=input("Gostaria de visualizar a produtividade de outro jogador? [S/N]").upper()
    if yn=="N":
            break
    




