let temperatura = 'quente';
let condicoesAtmosfericas = 'ensolarado';
let mensagem;
const x = document.getElementById('verdade')
switch (true) {
    case temperatura === "quente" && condicoesAtmosfericas === "ensolarado":
        mensagem = "Dia de praia!";
        break;
    case temperatura === "moderado" && condicoesAtmosfericas === "ensolarado":
        mensagem = "Bom dia para atividades ao ar livre.";
        break;
    case temperatura === "frio" && condicoesAtmosfericas === "ensolarado":
        mensagem = "Dia fresco, mas ensolarado.";
        break;
}

x.innerHTML = mensagem