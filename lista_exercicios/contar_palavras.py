def contar_palavras_com_a():
    frase = input("Digite uma frase: ")
    palavras = frase.split()
    contador = 0
    for palavra in palavras:
        if palavra.lower().startswith('a'):
            contador += 1
    return contador

print(f"Palavras que começam com 'a': {contar_palavras_com_a()}")