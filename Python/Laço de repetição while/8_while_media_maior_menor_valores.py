# Crie um programa que receba vários números e que, após inserir cada número, seja perguntado ao usuário se ele deseja inserir mais um. Se a resposta for sim, será dado um campo para inserir um novo número. Se for não, o programa finalizará e informará a quantidade de números dados, a média entre eles, qual o menor e qual o maior.


sim_nao = "S"
soma= 0
cont=0
maior=0
menor=0
while sim_nao == "S":
    num=int(input("Digite um número:"))
    soma+=num
    cont+=1
    if cont == 1:
        maior= menor= num
    else:
        if num > maior:
            maior=num
        elif num < menor:
            menor = num
    sim_nao=input("Você deseja digitar outro número? [S/N]").upper()
    while sim_nao != "S" and sim_nao != "N":
        sim_nao=input("Comando inválido! Você gostaria de digitar outro número? [S/N]").upper()

print(f"Você digitou {cont} números e a média foi {soma/cont}. \n O maior valor é {maior} e o menor é {menor}.")