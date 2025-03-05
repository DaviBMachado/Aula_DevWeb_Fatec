roupas = ["Camiseta", "Calça Jeans", "Jaqueta", "Tênis", "Boné"]
precos = [50.00, 120.00, 200.00, 250.00, 40.00]

carrinho = []

while True:
    print("\n=== Lista de Produtos ===")
    for i, (roupa, preco) in enumerate(zip(roupas, precos), start=1):
        print(f"{i}. {roupa} - R$ {preco:.2f}")

    try:
        escolha = int(input("\nDigite o número do produto que deseja comprar: ")) - 1
        
        if 0 <= escolha < len(roupas):
            carrinho.append((roupas[escolha], precos[escolha]))
            print(f"\n {roupas[escolha]} adicionada ao carrinho!")
        else:
            print("\n Número inválido! Escolha um produto da lista.")
    except ValueError:
        print("\n Entrada inválida! Digite um número válido.")
    
    continuar = input("\nDeseja comprar mais? (s/n): ").strip().lower()
    if continuar != 's':
        break

if carrinho:
    print("\n=== Produtos no Carrinho ===")
    total = 0
    for item, preco in carrinho:
        print(f"- {item}: R$ {preco:.2f}")
        total += preco
    print(f"\n Total da compra: R$ {total:.2f}")
else:
    print("\n Carrinho vazio. Nenhum item foi comprado.")
