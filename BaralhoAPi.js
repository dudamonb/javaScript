async function buscarCarta() {
    try{

        const resposta = await fetch(url); // faz a requisição e armazena

        // verificação se a requisição foi ok (200-299)
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.ok}`);
            }

            const dados = await resposta.json(); //Converte a resposta em json

            const deck_id = dados.deck_id // extrair a ID do baralho;

            const respostaCarta = await fetch (url);

            if(respostaCarta.ok){

                throw new Error(`Error na requisição: ${respostaCarta.status}`);

            }

            const dadosCarta = await respostaCarta.json();
            const carta = dadosCarta.cards[0];

            console.log(carta)

            
    }catch(erro){
        console.error(erro);
     alert("Ocorreu um erro ao buscar a carta")   
    }
}