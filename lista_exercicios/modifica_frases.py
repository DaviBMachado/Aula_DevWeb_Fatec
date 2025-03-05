def modificar_frase():
    frase = input("Digite uma frase: ")
    frase_modificada = frase.strip().replace(",", ".")
    print("Frase modificada:", frase_modificada)

modificar_frase()