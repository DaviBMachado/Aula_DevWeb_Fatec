import criarCard from '/src/components/card.js';

export function mostrarCard(container, dados){
    dados.results.forEach(item =>{
        const card = criarCard(item);
        container.appendChild(card);
    });
}