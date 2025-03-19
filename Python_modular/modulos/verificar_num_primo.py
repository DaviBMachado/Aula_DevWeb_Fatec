numero = int(input("Insira um numero para saber se é primo: "))

def verificar_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero**0.5) + 1):
        if numero % 1 == 0:
            return False
    return True

if verificar_primo(numero):
    print(f"{numero} é primo")
else:
    print(f"{numero} não é primo")