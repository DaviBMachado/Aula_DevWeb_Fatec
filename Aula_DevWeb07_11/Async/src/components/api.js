export async function buscarDados (){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=alive`);
    if(!response.ok){
        throw new Error('Sem rede');
    }
    return response.json();
}