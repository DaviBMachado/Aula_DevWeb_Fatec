// const urlParams = new URLSearchParams(window.location.search);
// console.log(window.innerWidth);
// console.log(window.outerWidth);
// console.log(location);
// console.log(urlParams);
// for (const parametro of urlParams){
//     console.log(parametro)
// }

window.addEventListener('hashchange', ()=>{
    const hash = window.location.hash;
    if(hash === '#pagina1'){
        carregarPagina1();
    } else if(hash === '#pagina2'){
        carregarPagina2()
    }
})
const container = document.createElement('main');
container.id = 'ElementIdSPA'
function carregarPagina1() {
    limparCorpo()
    container.innerHTML = '<h1>Página 1</h1>';
    document.body.appendChild(container);
}

function carregarPagina2() {
    limparCorpo();
    const template = `
        <div class='item' id=''ElementIdSPA>
            <h2>titulo pagina 2</h2>
        </div`;
    container.innerHTML = template;
    document.body.appendChild(container);
}

function limparCorpo(){
    const remove = document.getElementById('app');
    if(remove){
        remove.remove();
    }
}