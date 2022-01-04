#Crie um programa com uma função ficha(), e que receba como parâmetro nome de um jogador e quantidade de gols que ele fez, retornando essas informações e, como resultado, exibindo os dados inseridos num print formatado. Obs.: ambos os parâmetros devem ser opcionais e, quando não informados, nome e gols exibirão, respectivamente, <desconhecido> e 0.


def ficha(nome="<desconhecido>", gols=0):
    
    print()
    print(f"O jogador {nome} fez {gols}  gols.")
    print()


n=input("Nome do jogador:")
g=input("Quantdade de gols:")

if g.isnumeric():
    g=int(g)
else:
    g=0

if n.strip() == "":
    ficha(gols=g)
else:
    ficha(n, g)






