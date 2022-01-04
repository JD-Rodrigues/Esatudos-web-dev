





soma_idades=0
name_older_man=""
mm20=0
older_man_age=0

cont=1

while cont <= 4:
    name=input(f"Digite o nome da pessoa {cont}:")
    genre=input(f"Digite o sexo da pessoa {cont}: (M/F)").upper()
    age=int(input(f"Digite a idade da pessoa {cont}:"))
    soma_idades=soma_idades+age
    if genre == "M":
        if age > older_man_age:
            name_older_man=name
    
    elif genre == "F":
        if age < 20:
            mm20=mm20+1

    cont=cont+1

print(f"A média das idades dadas é {soma_idades/4}. O nome do homem mais velho é {name_older_man}. Há {mm20} mulheres com idade abaixo de 20 anos.")

