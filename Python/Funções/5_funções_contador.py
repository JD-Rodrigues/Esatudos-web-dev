#Crie um programa com uma função chamada "contador", contendo 3 parâmetros: início, fim e pulo. AO executar o programa, ele mostrará:
# uma lista de 1 a 10, pulando 1;
# uma lista regressiva de 10 a -2, pulando 2;
# uma lista personalizada pelo usuário, sendo que:
#    - se o contador for 0, o programa pulará de 1 em 1.

from time import sleep

def contador(início, fim, pulo=1):
    if pulo == 0:
        pulo=1

    if pulo < 0:
        pulo=pulo*-1

    if início > fim:
        for c in range(início, fim-1, -pulo):
            print(c, end=" ")
            sleep(0.7)
    else:
        for c in range (início, fim+1, pulo):
            print(c, end=" ")
            sleep(0.7)



contador(int(input("Valor inicial:")), int(input("Valor final:")), int(input("Número de pulos:")))