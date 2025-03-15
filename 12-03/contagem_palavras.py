# Atividade1
#  recebe o texto do usuario; sugestão de frase para inserir: TESTE dA FuNçÃo LoWeR e METODO SPLIT SPLIT split e 
texto = input("Digite um texto: ")
# funcao recebe a variavel 'texto' e a transforma em minuscula e separa as palavras, divide todos em um dicionario
# e conta quantas vezes cada palavra aparece
def contar_palavras(texto):
    # transforma as palavras em minuscula, e divide todas em um dict
    texto = texto.lower().split()
    # cria um dict vazio
    dicionario = {}

    # para cada palavra(item) na variavel 'texto'
    # a condicional logica precisa falhar para passar pelo else e adicionar a palavra ao dicionario
    # e depois calcular sua repeticao
    for palavra in texto:
        # condicional se a palavra(item) está em dicionario, adiciona mais 1 a quantidade de valores das palavras
        if palavra in texto:
            dicionario[palavra] += 1
        # se a palavra(item) não está no dicionario, adiciona a palavra e o valor 1
        else:
            dicionario[palavra] = 1
    return dicionario

print(contar_palavras(texto))