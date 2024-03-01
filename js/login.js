const data = [
    {
        "user": "maria",
        "password" : "123456"
    },
    {
        "user": "carlos",
        "password" : "123456"
    },
    {
        "user": "lua",
        "password" : "123456"
    },
    {
        "user": "myllenny",
        "password" : "123456"
    }
]
//console.log(data)


const btn = document.querySelector("#btn-login")

btn.addEventListener('click', (event)=>{
    event.preventDefault() //torna o campo obrigatório

    const user = document.getElementById('floatingInput').value
    const password = document.getElementById('floatingPassword').value

    const login = data.find((obj) => obj.user === user && obj.password === password) //para encontrar senha e nome de usuário

    const limpa1 = document.getElementById('floatingInput').value = ''
    const limpa2 = document.getElementById('floatingPassword').value = ''

    if(login){
        window.location = '../index.html'
    }else{
        alert(`Usuário não registrado! Tente novamente...`)
        limpa1
        limpa2
    }
    
    
})