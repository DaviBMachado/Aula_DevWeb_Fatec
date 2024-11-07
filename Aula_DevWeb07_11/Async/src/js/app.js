import { buscarDados} from '/src/components/api.js';
import {mostrarCard} from '/src/components/ui.js';
async function init() {
    try {
        const dadosExternos = await buscarDados();
        const appContainer = document.getElementById('app');
        mostrarCard(appContainer, dadosExternos)
    } catch (error){
        console.error('Erro ao buscar os dados: ', error)
    }
}
init();