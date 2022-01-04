
#Crie um programa que receba nome, ano de nascimento de um trabalhador. Caso  ele tenha CTPS, o programa receberá ainda o ano do primeiro contrato de trabalho, o salário do primeiro emprego. Em seguida, o programa exibe todos os dados recebidos, mais a quantidade de anos que ainda faltam para a aposentadoria do trabalhador.


cadastro={'nome': str(input("Nome:")), 
    'ano de nascimento': int(input("Ano de nascimento:")), 
    'CTPS': int(input("Carteira de Trabalho:"))}

if cadastro['CTPS'] > 0:
    cadastro['ano contrato'] =  int(input("Ano de contratação:")) 
    
    cadastro['salario'] = int(input('Salário:'))
    cadastro['idade']= 2021- cadastro['ano de nascimento']
    cadastro['tempo para aposentadoria']= 35 - (2021 - cadastro['ano contrato'])


print("=-"*20)
print("CADASTRO DE TRABALHADOR")
print("=-"*20)

print(f" Nome: {cadastro['nome']} \n Idade: {cadastro['idade']} \n Carteira de Trabalho: {cadastro['CTPS']} \n Primeiro salário: {cadastro['salario']} \n Tempo restante para aposentadoria: {cadastro['tempo para aposentadoria']} anos.")

