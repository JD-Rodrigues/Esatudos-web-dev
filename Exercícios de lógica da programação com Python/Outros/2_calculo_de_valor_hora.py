#Crie um programa que calcule o valor/hora de um trabalhador com base em seu salário mensal e na quantidade de horas trabalhadas mensalmente.

salario_mensal = input("Qual é o seu salário mensal?")
horas_mensais = input("Quantas horas você trabalha por mês?")
valor_hora = int(salario_mensal) / int(horas_mensais)

print("Você ganha" , valor_hora , "reais por hora.")