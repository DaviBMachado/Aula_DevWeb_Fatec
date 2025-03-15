def registra_informacoes(*args, **kwargs):
    print("Argumentos indeterminados")
    for arg in args:
        print(arg)

    print("Argumentos nomeados")
    for key, value in kwargs.items():
        print(f"{key}: {value}")

registra_informacoes(1,2,3, nome="Davi", idade=23, cidade="São Paulo")