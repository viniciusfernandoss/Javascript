function tabuada() {
    var n = window.document.getElementById('numerotxt').value
    var numero = Number(n)
    var resposta = window.document.getElementById('res')


    resposta.innerHTML = `Tabuada de ${n}: <br>`

    if (numero.length == 0) {
        alert('[ERRO] Você não digitou um número!')
    } else {
        //
        alert(typeof numero)
         for (var c = 1; c <= 10; c++) {
            var t = n * c

            resposta.innerHTML += `${n} x ${c} = ${t} <br>`
        }
    }
}