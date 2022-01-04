#Crie um programa com uma função chamada "contador", contendo 3 parâmetros: início, fim e pulo. AO executar o programa, ele mostrará:
# uma lista de 1 a 10, pulando 1;
# uma lista regressiva de 10 a -2, pulando 2;
# uma lista personalizada pelo usuário, sendo que:
#    - se o contador for 0, o programa pulará de 1 em 1.

from time import sleep

def contador(inicio, fim, pulo):
    
    if pulo==0:
        pulo=1

    if pulo < 0:
        pulo=pulo*-1
    
    if inicio > fim:
        for c in range(inicio, fim-1, -pulo):
            print(c, end=" ")
            sleep(1)

    else:
        for c in range(inicio, fim+1, pulo):
            print(c, end=" ")
            sleep(1)

contador(1, 12, -1)