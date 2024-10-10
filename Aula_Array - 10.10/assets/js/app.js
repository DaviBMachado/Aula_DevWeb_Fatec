const antes = document.querySelector("#antes");
const depois = document.querySelector("#depois");

const frutas = ["abc", 34 , 12 , 45, "xxxx", 23];
//Realiza um "Corte/Seleção" de conteúdo dentro de uma Array
const carrinho = frutas.slice(0,3);
/*
adicionar na ultima posição
frutas.push(34,12,45)
frutas.push("xxxx")
frutas.push("abc",23)
*/
antes.innerHTML = carrinho
//frutas.pop()