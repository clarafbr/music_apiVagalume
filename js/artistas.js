const btn = document.querySelector("#btn-artistas")
const btnLimpar = document.querySelector("#btn-artistas-limpar")

btnLimpar.addEventListener('click', () => {
    window.location = '../pages/artistas.html'
})

btn.addEventListener('click', () => {
    const personagem = document.getElementById('input-artistas').value
    const personagemSemEspaco = personagem.replace(/\s+/g, "-").toLowerCase().trim()
    console.log(personagemSemEspaco)
    //valor do index do parâmetro
    if(personagem === ''){
        alert('Por favor, digite o nome do artista!')
        return
    }else{
    event.preventDefault() //torna o campo obrigatório
    

    const url = `https://www.vagalume.com.br/${personagemSemEspaco}/index.js`

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
    // console.log(data.artist.genre[1].name)

        
        resultArtist.innerHTML =
        `
    <div class="nome-img-artist">
        <img class="img-artist" src="https://www.vagalume.com.br/${data.artist.pic_small}" alt="">
        <h1>${data.artist.desc}</h1>
    </div>
    <br>
    <div class="genre-artist" id="genre-artist">
        <h4>Gêneros musicais do artista: </h4><br>
        
    </div>
    <br>
    <div class="toplyrics-artist" id="toplyrics-artist">
        <h3>Músicas de ${data.artist.desc}:</h3>
    </div>
    `



  
    

    resultList.appendChild(resultArtist)
    data.artist.genre.map((element,index) => {
        var generoatual = document.createElement('h5')
        console.log(generoatual)
   
    
        console.log(index)
        generoatual.innerHTML = `${data.artist.genre[index].name}`
    const genreartistdiv = document.getElementById("genre-artist")
    console.log(genreartistdiv)
    genreartistdiv.appendChild(generoatual)
    });

    resultList.appendChild(resultArtist)
    data.artist.toplyrics.item.map((element,index) => {
        var musicaatual = document.createElement('h5')
        console.log(musicaatual)
   
    
        console.log(index)
        musicaatual.innerHTML = `${data.artist.toplyrics.item[index].desc}`
    const genreartistdiv = document.getElementById("toplyrics-artist")
    console.log(genreartistdiv)
    genreartistdiv.appendChild(musicaatual)
    });

}
