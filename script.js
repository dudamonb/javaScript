const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
const botao = document.querySelector('#botao-carta') // arthur me ensinou//
const valorImg = document.querySelector("#cartinha")

async function buscarCarta() {
    const dado = await fetch(url)
    if(dado.ok){
        const carta = await dado.json()
        valorImg.src=carta.cards[0].image

    }
}
botao.addEventListener('click',()=>{  // arthur me ensinou
    buscarCarta()
})





