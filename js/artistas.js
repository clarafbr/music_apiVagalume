const btn = document.querySelector("#btn-artistas")

btn.addEventListener('click', () => {
    event.preventDefault() //torna o campo obrigatório

    const personagem = document.getElementById('input-artistas').value
    //valor do index do parâmetro

    const url = `https://www.vagalume.com.br/${personagem}/index.js`

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro de rede código ' + response.status)
            }
            return response.json()
        })
        .then((data) => {
            catchData(data)
        })
        .catch((err) => console.log(err))
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
    <div>
    </div>
    `


    resultList.appendChild(resultArtist)

}