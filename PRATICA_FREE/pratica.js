
const add = document.querySelector("#add");
const atender = document.querySelector("#atender");
const desistencia = document.querySelector("#desistencia");
const minhaArray = [];
const lista = document.querySelector("#lista");

add.addEventListener('click',(e)=>{
    e.preventDefault();
    const age = document.querySelector("#age").value;
    if(age >= 65){
        primeFila(age);
    }else{
        fimFila(age);
    }
    exibir(age);
})

function exibir(){
    lista.innerHTML = minhaArray;
}

function primeFila(age){
    minhaArray.unshift(age);
}
function fimFila(age){
    minhaArray.push(age);
}

atender.addEventListener('click',(e)=>{
    e.preventDefault();
    excloi(age);
    exibir(age);
})

function excloi(){
    minhaArray.shift(age);
}
function excloiPrimer(){
    minhaArray.pop(age);
    exibir(age);
}

desistencia.addEventListener('click',(e)=>{
    e.preventDefault();
    excloiPrimer(age);
})