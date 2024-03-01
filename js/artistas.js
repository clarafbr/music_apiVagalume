const btn = document.querySelector("#btn-artistas")
const btnLimpar = document.querySelector("#btn-artistas-limpar")

btnLimpar.addEventListener('click', () => {
    window.location = '../pages/artistas.html'
})

btn.addEventListener('click', () => {
    const personagem = document.getElementById('input-artistas').value
    //valor do index do parâmetro
    if(personagem === ''){
        alert('Por favor, digite o nome do artista!')
        return
    }else{
    event.preventDefault() //torna o campo obrigatório

    const url = `https://www.vagalume.com.br/${personagem.toLowerCase()}/index.js`

    const limpa = document.getElementById('input-artistas').value = ''

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                alert('A API não possui esse artista registrado')
                throw new Error('Erro de rede código ' + response.status)
            }
            return response.json()
        })
        .then((data) => {
            catchData(data)
        })
        .catch((err) => console.log(err))
    limpa
    }
})



function catchData(data) {
    const resultList = document.querySelector('.results-list-artist')
    const resultArtist = document.createElement('div')

    resultArtist.innerHTML =
        `
    <div class="nome-img-artist">
        <img class="img-artist" src="https://www.vagalume.com.br/${data.artist.pic_small}" alt="">
        <h1>${data.artist.desc}</h1>
    </div>
    <br>
    <div class="genre-artist">
        <h3>Generos</h3>
    </div>
    <br>
    <div class="toplyrics-artist">
        <h3>Musicas</h3>
        <a class="ouca-musica" href="">Ouça a música</a>
    </div>
    `
    

    resultList.appendChild(resultArtist)

}


