function contar() {
    var i = window.document.getElementById('iniciotxt').value
    var f = window.document.getElementById('fimtxt').value
    var p = window.document.getElementById('passotxt').value
    var resposta = window.document.getElementById('res')

    if (i.length == 0 || f.length == 0 || p.length == 0 || p <= 0) {
        window.alert('ERRO')
    } else {
        resposta.innerHTML = 'Contando:'
        var fim = Number(f)
        var inicio = Number(i)
        var passo = Number(p)
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                resposta.innerHTML += ` ${c} 👉`
            }
        } else {
            for (var c = inicio; c >= fim; c -= p) {
                resposta.innerHTML += ` ${c} 👉`
            }
        }
    }
        resposta.innerHTML += `🏁`
    }

//alert(typeof inicio) serve para ver o tipo do dado da variavel
