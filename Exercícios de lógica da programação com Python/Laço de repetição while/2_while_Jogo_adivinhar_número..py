#Crie um programa que, ao ser executado, gere um número aleatório de 1 a 10 e receba chutes do usuário, até que ele acerte o número. A cada tentativa falha, o programa informará que o usuário errou e sugerirá se ele deve chutar um número maior ou menor. Quando acertar, aparecerá a mensagem informando o acerto e a quantidade de tentativas falhas.


from random import randint

computador = randint(0,10)
fail_tries=0
jogador=int(input("Vou pensar em um número de 1 a 10. Humm... Pensei! Agora tente adivinhar!"))

while jogador != computador:
    if jogador<computador:
        jogador=int(input("Mais... Tente mais uma vez."))
    else:
        jogador=int(input("Menos... Tente mais uma vez."))

    fail_tries=fail_tries+1

    
if fail_tries==0:
    print("Você acertou de primeira!")

elif fail_tries==1:
    print("Você acertou! mas teve 1 tentativa falha.")

else:
    print(f"Você acertou! Mas teve {fail_tries} tentativas falhas.")
