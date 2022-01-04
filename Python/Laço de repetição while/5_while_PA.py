#Crie um programa que receba o termo inicial e a razão de uma progressão aritmética e, como resultado, exiba os 10 primeiros termos dessa PA. 

ti=int(input("Digite o termo inicial da PA:"))
rz=int(input("Digite a razão da PA:"))

cont=0
 
while cont < 10:
        print(f"{ti}", end="-->")
        cont=cont+1
        ti=ti+rz
print("...")
  

    