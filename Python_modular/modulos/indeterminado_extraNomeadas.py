def registra_informacoes(*args, **kwargs):
    print("Argumentos indeterminados")
    for arg in args:
        print(arg)

    print("Argumentos nomeados")
    for key, value in kwargs.items():
        print(f"{key}: {value}")