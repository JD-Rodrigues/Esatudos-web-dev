#Crie um programa que gere 4 números de 0 a 9, aleatoriamente, e os armazene numa tupla. No final, ele deverá mostrar os números gerados, o maior e o menor dentre eles.

from random import randint

numeros=(randint(0,9), randint(0,9), randint(0,9), randint(0,9))

print(f"Os números gerados foram: {numeros}. \n O maior número foi {max(numeros)} e o menor foi {min(numeros)}.")