const url = 'https://dummyjson.com/products'  // importar o endereço da API

 async function chamarAPI(){
    fetch(url) // fetch é a função para interagir com a API

    const resp = await fetch(url); // vai salvar o retorno(resposta = resp) da API dentro da variável resp = constante para armazenar a respota
    
    // await, função assícrono (não acontece ao mesmo tempo)
    if(resp.status === 200){
        const obj = await resp.json() // resposta em json // 
        console.log(obj);
    }
     console.log(resp)
    

}
chamarAPI();