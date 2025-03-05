saldo = 1000

carrinho = []

while True:
    nome_produto = input("Qual é o nome do produto? ")

    preco_produto = float(input("Qual é o preço do produto? "))

    quantidade_produto = int(input("Quantos desse produto você quer? "))

    total_produto = preco_produto * quantidade_produto

    saldo -= total_produto

    carrinho.append({"nome": nome_produto, "preço": preco_produto, "quantidade": quantidade_produto})

    adicionar_mais = input("Quer adicionar mais itens? (S/N): ").strip().lower()

    if adicionar_mais == "n":
        break

print("\nSaldo final da carteira:", saldo)

print("\nCarrinho de compras:")
for item in carrinho:
    print(f"{item['quantidade']}x {item['nome']} - R${item['preço']:.2f} cada")