let materia1 = 10
let faltas = 20
let mensagem
const x = document.getElementById('situacao')
switch(true){
    case materia1 >= 7 && faltas <= 20:
        mensagem = 'Aprovado'
        break
    case materia1 < 7 && faltas >= 20:
        mensagem = 'Reprovado'
        break
        case materia1 >=7 && faltas > 20:
            mensagem = 'Reprovado'
            break
}

x.innerHTML = mensagem