#Crie um programa que mostre os 5 primeiros times no ranking do Campeonato Brasileiro, os 4 últimos, uma lista de todo o top 20 em ordem alfabética e a colocação da Chapecoense.

top_vinte=("Atlético-MG", "Palmeiras", "Fortaleza", "Bragantino", "Flamengo", "Athletico-PR", "Atlético-GO", "Ceará", "Internacional", "Santos", "Corinthians", "Juventude", "Bahia", "São Paulo", "Fluminense", "Cuiabá", "Sport Recife", "América-MG", "Grêmio", "Chapecoense")
print("="*30)
print(f"Os 5 primeiros colocados do Brasileirão são: {top_vinte [0:5]}.\n\n Os 4 últimos colocados são: {top_vinte [-4:]}. \n\n Segue uma lista com os times em ordem alfabética: {sorted(top_vinte)}. \n \n A Chapecoense está na {top_vinte.index('Chapecoense')+1}ª posição.")

