#Crie um programa em que 4 jogadores (bots) lancem 1 dado. A seguir, mostre quantos pontos cada jogador tirou. Em seguida, o programa mostrará o ranking da maior pontuação para a menor.

from random import randint
from operator import itemgetter
from time import sleep



res={'jogador 1': randint(1,6), 'jogador 2': randint(1,6), 'jogador 3': randint(1,6), 'jogador 4': randint(1,6)}

print()
print("-"*20)

for i,v in res.items():
    sleep(0.7)
    print(f"O {i} tirou {v}.")

print("-"*20)
print()

lista=[]

for i, v in res.items():
    lista.append([i,v])

lista.sort(key=itemgetter(1), reverse=True)

for i, v in enumerate(lista):
    sleep(0.7)
    print(f"O {v[0]} ficou em {i+1}º lugar, com {v[1]} pontos.")

#ESTE for PODERIA SER ASSIM TAMBÉM:

#for c in range(1,len(lista)+1):
#    sleep(0.7)
#  print(f"O {lista[c][0]} ficou em {c}º lugar, com {lista[c][1]}.")

    