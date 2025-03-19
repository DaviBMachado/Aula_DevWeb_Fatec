# atividade2
# lista vazia que vai receber valores a partir do input do usuário
notas = []
# 'contadora' que estipula qtd de notas a serem recebidas
numero_notas = 5
# loop ára receber notas
for i in range(numero_notas):
    # notas como float
    nota = float(input(f'Digite a nota {i + 1}: '))
    # adiciona a nota na lista
    notas.append(nota)
# varivel que vai receber valores individuais da lista 'notas'
soma = 0
# loop para somar as notas da lista 'notas'
for nota in notas:
    soma += nota    

print(f"Soma das notas: {soma}")
# define o numero de alunos de acordo com a quantidade de notas
numero_alunos = len(notas)
# funcao que recebe os valores de 'soma' e 'numero_alunos' e calcula a média
def media_escolar(soma, numero_alunos):
    return soma / numero_alunos
# imprime a funcao usando os parametros 'soma' e 'numero_alunos'
print(f"A media de notas da escola é: {media_escolar(soma, numero_alunos)}")