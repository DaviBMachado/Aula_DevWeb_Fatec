lista = []
numeros = []

qtd_numero = 5

for i in range(qtd_numero):
    numero = float(input(f"Digite o numero {i +1}: "))
    numeros.append(numero)

def soma_lista(lista):
    if not lista:
        return 0
    else:
        return lista[0] + soma_lista(lista[1:])
    
resultado = soma_lista(numeros)
print(f"A soma dos elementos da lista é: {resultado}")