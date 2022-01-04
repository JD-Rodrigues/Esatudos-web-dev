#Crie um programa que receba a informação sobre o sexo do usuário e devolva a informação: “Obrigado, sexo ___ registrado!”. Restrição: ele não deve receber dados diferentes do proposto.


sexo=input("Por favor, informe seu sexo (M/F):") .upper()

while sexo != "M" and sexo != "F":
    sexo=input("Dados inválidos. Por favor, informe seu sexo: (M/F)?")
  

if sexo=="M":
        sexo="masculino"
else:
        sexo="feminino"


    
print(f"Sexo {sexo} registrado com sucesso! Muito obrigado!")