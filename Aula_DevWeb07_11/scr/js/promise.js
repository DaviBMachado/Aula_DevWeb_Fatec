const fetchPromise = fetch(
    "https://viacep.com.br/ws/0100100/json/",
);

console.log(fetchPromise);

/* fetchPromise
    .then((resposta)=>{
        console.log(resposta)
        if(!resposta.ok){
            throw new Error(`HTTP error:
                ${resposta.status}`);
        }
        return resposta.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error) ) */






/*  console.log('um')
 setTimeout(() => {
    console.log('dois') 
 }, 0); 
 Promise.resolve('quatro')
 .then(res=>
     console.log(res)
 );
 queueMicrotask(()=>{
     console.log('tres')
 });
    console.log('cinco'); */

/* async function fetchData() {
    try{
        const result = await fetch(
            "https://viacep.com.br/ws/01001000/json/"
        )
        const data = await result.json()
        console.log(data);
    } catch(error){
        console.error(error)
    }
}
fetchData(); */

async function init(){
    try{
        const dadosJson = fetchData();
        const appContainer = 
        document.getElementById('app');
        mostrarCard(appContainer, dadosJson);
    } catch {
        console.error('Error fetching data:', error)
    }
}