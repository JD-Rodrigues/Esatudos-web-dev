#Aprimore o programa do exercício anterior, criando uma função de validação de dados, que valide números e informe ao usuário que ele inseriu um dado inválido, caso ele digite letras em vez de números. Para isso, crie um outro modulo contendo a função leiaNumero().

import dados, moeda

preço=dados.leianumero("Digite um número:")

moeda.resumo(preço, 15, 27)