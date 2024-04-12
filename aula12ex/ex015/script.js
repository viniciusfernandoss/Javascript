function verificar() {
    var anoNasc = window.document.querySelector('input#anoNasc').value
    var resposta = window.document.querySelector('div#res')
    var foto = window.document.querySelector('img#image')

    var data = new Date()
    var anoAgr = data.getFullYear()

    var anoN = Number(anoNasc)
    

    if (anoN > 2024 || anoN < 0) {
        alert('Ano invalido')
    } else {
        var idade = anoAgr - anoN

        // //criando tagHTML no Javascript
        // var foto = document.createElement('img')
        // foto.setAttribute('id', 'fotoId') //dando uma id chamada fotoId
        

        var sSex = window.document.getElementsByName('sex')
        var genero = ''
        if (sSex[0].checked) {
            genero = 'Homem'
            foto.src = 'imagens/foto-homem.png' // ou foto.setAttribute('src', 'imagens/foto-homem.png')
            document.body.style.backgroundColor = '#78BEE9'
        } else if (sSex[1].checked) {
            foto.src = 'imagens/foto-mulher.png' // ou foto.setAttribute('src', 'imagens/foto-mulher.png')
            genero = 'Mulher'
            document.body.style.backgroundColor = '#F2C2CB'
        }

        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        resposta.appendChild(foto) //adiciona a foto na tagHTML
    }

    
}