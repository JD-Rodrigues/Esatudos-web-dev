#Crie um programa com uma função chamada inteiro(), com um parâmetro que validará um número inteiro, exibindo uma mensagem de erro quando o valor digitado for de tipo diferente, dando uma nova oportunidade para o usuário. QUando o valor for inserido corretamente, ele exibirá a mensagem: Você digitou o número __.

def inteiro(msg):
    ok=False
    valor=0
    while True:
        n=input(msg)
        if n.isnumeric():
            valor=int(n)
            ok=True
        else:
            print("Insira um número inteiro válido.")

        if ok:
            break

    return valor




num=inteiro("Digite um número:")

print(f"Você digitou o número {num}")


