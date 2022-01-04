#Crie um módulo "moeda",  contendo as funções: dobro(), metade() aumento() e redução() e crie um programa que utilize as funções deste módulo, onde um valor seja lido e mostre quais os resultados se este valor for dobrado, dividido ao meio, aumentado em 10% e reduzido em 15%.

import moeda

num=float(input("Digite o preço: R$ "))


print(f"A metade de {moeda.currency(num)} é {moeda.currency(moeda.metade(num))}")


print(f"O dobro de {num} é {moeda.currency(moeda.dobro(num))}")

print(f"Aumentando em 10%, temos {moeda.currency(moeda.aumento(num, taxa=10))}")

print(f"Reduzindo em 15%, temos {moeda.currency(moeda.redução(num, taxa=15))}")