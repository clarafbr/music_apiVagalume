const btn = document.querySelector("#btn-artistas")

btn.addEventListener('click', (event)=>{
    event.preventDefault() //torna o campo obrigatório

        const personagem = document.getElementById('input-artistas').value
        //valor do index do parâmetro

    const url = `https://www.vagalume.com.br/${personagem}/index.js`
    console.log(url)

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede código '+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        personagem(data)
    })
    .catch((err)=>console.log(err))

    // function personagem(item){

    // }
    

})