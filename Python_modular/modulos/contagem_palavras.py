texto = input("Digite um texto: ")
def contar_palavras(texto):
    texto = texto.lower().split()
    dicionario = {}
    for palavra in texto:
        dicionario[palavra] = dicionario.get(palavra, 0) + 1
    return dicionario 

print(f"Quantidade de palavras no texto informado: {contar_palavras(texto)}")  