import random

fails=0

num = random.randint(1,10)


dado=0

tent=int(input("Chute um número de 1 a 10:"))
dado=tent

if dado==num:
    print("Você acertou de primeira!")

while dado != num:
    dado=tent
    fails=fails+1
    if dado<num:
        tent=int(input("Um pouco mais. Tente novamente."))
        
    elif dado>num:
        tent=int(input("Um pouco menos. Tente novamente."))
        
    elif dado == num:
        print(f"Você acertou! Mas errou {fails} vezes.")

    elif (dado < 0 or dado>10):
        tent=int(input("Ops! Chute um número de 1 a 10")) 
        