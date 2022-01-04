#Crie um programa que receba o nome de um jogador e o número de partidas jogadas, bem cmo quantos gols foram feitos em cada uma das partidas e guarde todos estes dados em um dicionário. A seguir, mostrará:
#  o valor de cada key do dicionário;
#  "O jogador ___ jogou __ partidas."
#  quantos gols ele fez em cada partida.

cadastro={'nome':input("Nome do jogador:"), 'gols': [], 'total':int(input("Total de partidas jogadas:"))}

gols=[]
for gol in range(1,cadastro['total']+1):
    gols.append(int(input(f"Quantos gols no jogo {gol}?")))
cadastro['gols']=gols

print("=-"*25)
print(cadastro)
print("=-"*25)
print(f" O campo nome tem o valor {cadastro['nome']}. \n O campo gols tem o valor {cadastro['gols']}. \n O campo total tem o valor {cadastro['total']}.")
print("=-"*25)
print(f"O jogador {cadastro['nome']} jogou {cadastro['total']} partidas.")

for i, v in enumerate(gols):
    print(f"=> Na partida {i}, fez {v} gols.")