#Crie um programa com uma função print, contendo um parâmetro textual. que apresente o texto entre linhas proprorcionais ao tamanho do texto.

def spec_print(frase):
    print("="*(len(frase)+2))
    print(frase)
    print("="*len(frase))

spec_print("Hoje é um novo dia")