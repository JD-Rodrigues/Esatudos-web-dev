#Crie um programa com uma função print, contendo um parâmetro textual. que apresente o texto entre linhas proprorcionais ao tamanho do texto.
def escreva(txt):
    print('='*len(txt))
    print(txt)
    print('='*len(txt))

escreva('O pré-sal na economia brasileira')
escreva('HOJE')

escreva("Azul é a cor maus quente.")