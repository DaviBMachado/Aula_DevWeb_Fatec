const titulo = document.getElementById('exibir')
titulo.innerHTML = "Ok, estou aqui"

const idade = 60;
let mensagem;
if(idade <= 18){//< 
    mensagem = 'Adolescente'
}else if(idade >18  && idade <= 30){
    mensagem = 'Adulto médio'
}else if(idade >30 && idade <=50){
    mensagem = 'Adulto'
}else{
    mensagem = 'Idoso'
}

titulo.innerHTML = mensagem

const calculadora = document.getElementById('calc')

const num1 = 7
const num2 = 5
const operacao = '*'
let calculo

if(operacao == '+'){
    calculo = num1 + num1
}else if(operacao == '-'){
    calculo = num1 - num1
}else if(operacao == '/'){
    calculo = num1/num1
}else if(operacao == '*'){
    calculo = num1*num1
}


calculadora.innerHTML = calculo

const calculador4 = document.getElementById('kalc')

const operacao2 = '+'
let calculo2

if(operacao2 == '+'){
    calculo2 = num2 + num2
}else if (operacao2 == '-'){
    calculo2 = num2 - num2
}else if (operacao2 == '*'){
    calculo2 = num2 * num2
}else if (operacao2 == '/'){
    calculo2 = num2 / num2
}

calculador4.innerHTML= calculo2