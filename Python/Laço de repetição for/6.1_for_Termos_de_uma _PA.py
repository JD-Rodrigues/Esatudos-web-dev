#Crie um programa que receba o primeiro termo de uma progressão aritmética
# e a sua razão e, como resultado, exiba os primeiros 10 termos dessa PA.

ti=int(input("Digite o primeiro termo de uma PA:"))
rz=int(input("Digite a razão da PA:"))

print("Os dez primeiros termos dessa progressão são:", end=" ")

for c in range(1,10):
    if c==1:
        print(ti)
    else:
        ti=ti+rz
        print(ti, end=" ")    

print(f"e {ti+rz}.")