texto = input("Digite um texto: ").split()

lista = []

def conta_palavras(texto):
    for palavra in texto:
        lista.append(palavra)

    print(lista)
    return len(lista)

print(f"O total de palavras é: {conta_palavras(texto)}")