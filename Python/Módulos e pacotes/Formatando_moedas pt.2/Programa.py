#Adapte o programa do exercício anterior, criando um parâmetro lógico opcional adicional nas funções, de modo que, quando este parâmetro for True, os valores serão exibidos em formatação de moeda, e, quando False ou deixado em branco, os valores serão exibidos sem esta formatação. O código no programa principal deve ser escrito de uma forma que não seja necessário colocar a função de cálculo dentro da função de formatação de moeda, tornando-o, assim, mais limpo.
import moeda


num=float(input("Digite o preço: R$ "))


print(f"A metade de {moeda.currency(num)} é R${moeda.metade(num, True)}")
print(f"O dobro de {moeda.currency(num)} é {moeda.dobro(num,True)}")
print(f"Aumentando em 10%, temos {moeda.aumento(num, True)}")
print(f"Reduzindo em 15%, temos {moeda.redução(num, True)}")
