// importar o endereço da API // 
const url = 'https://medium.com/reactbrasil/'
async function chamarAPI(){
    fetch(url)

    const resp = await fetch(url);
    if(resp.status ===200){
        const obj = await resp.json()
        console.log(obj)
    }
    console.log
    
}


