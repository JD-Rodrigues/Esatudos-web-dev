# Tratamento de Erros
Projeto referente ao curso "Tratamento de Erros" do qual participei pela Digital Innovation One.

## Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número.
Realize as seguintes validações:
- Se os parâmetros não forem enviados, lance um erro do tipo <code>ReferenceError</code>
- Se o array não for do tipo 'object', lance um erro do tipo <code>TypeError</code>
- Se o número não for do tipo 'number', lance um erro do tipo <code>TypeError</code>
- Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro - do tipo <code>RangeError</code>
- Utilize a declaração <code>try...catch</code>
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador <code>instanceof</code>
