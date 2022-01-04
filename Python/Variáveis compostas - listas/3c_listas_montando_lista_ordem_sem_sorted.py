#Fazendo o que o "sort()" faz.

lista=[3,7,1,9,14,2]
ord_list=[]

for pos, num in enumerate(lista):
    if pos == 0 or num > max(ord_list):
        ord_list.append(num)
    else:
        for p, n in enumerate(ord_list):
            if num <= n:
                ord_list.insert(p,num)
                break

print(f"Esta é a lista ordenada: {ord_list}.")