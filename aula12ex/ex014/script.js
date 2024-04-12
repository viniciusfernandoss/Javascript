function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 19) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#bc7759'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#06161b'
    }
}