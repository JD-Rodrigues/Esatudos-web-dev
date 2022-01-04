from time import sleep

#Crie um programa com uma função chamada "contador", contendo 3 parâmetros: início, fim e pulo. AO executar o programa, ele mostrará:
# uma lista de 1 a 10, pulando 1;
# uma lista regressiva de 10 a -2, pulando 2;
# uma lista personalizada pelo usuário, sendo que:
#    - se o contador for 0, o programa pulará de 1 em 1.

def contador(i, f, p):
    if p == 0:
        p=1
    if p < 0:
        p=p*-1
    if i >= f:
        cont=i
        while cont >= f:
            print(cont, end=" ")
            cont=cont-p
            sleep(0.7)
    else:
        cont=i
        while cont <= f:
            print(cont, end=" ")
            cont=cont+p
            sleep(0.7)

contador(1, 10, 1)
print()
print('=-'*25)
contador(10, -2, -2)
print()
print('=-'*25)
sleep(0.7)

contador(int(input("Valor inicial:")), int(input("Valor final:")), int(input("Número de pulos:")))