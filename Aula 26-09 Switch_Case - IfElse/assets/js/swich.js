const num1 = 7
const num2 = 5
const operacao = '*'
let calculo
const calculadora = document.getElementById('calc')
switch(operacao){
    case "*":
        calculo = num1 * num2
    break   
    case '-':
        calculo = num1 - num2
    break   
    case '+':
        calculo = num1 + num2
    break   
    case '/':
        calculo = num1 / num2
    break  
    default: 
        calculo = 'Operação inválida'
}

calculadora.innerHTML = calculo