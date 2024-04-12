var num = window.document.getElementById('txtn')
var lista = window.document.getElementById('add')
var resposta = window.document.getElementById('res')
var valores = []




function isNumero(n) { //validação se o número está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //validação se o número já foi adicionado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //chamando as funções de validações
        var numero = Number(num.value)
        valores.push(numero)
        lista.innerHTML += `<br>${numero} adicionado.`
        resposta.innerHTML = ''
        //window.alert(typeof numero)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ""
    //num.focus()
}

function finalizar() {

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        resposta.innerHTML += `<br>Ao todo, temos ${valores.length} números adicionados.`
        valores.sort()
        resposta.innerHTML += `<br>O maior valor adicionado foi ${valores.at(-1)}`
        resposta.innerHTML += `<br>O menor valor adicionado foi ${valores[0]}`
        let soma = 0
        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]
        }
        resposta.innerHTML += `<br>A soma dos valores adicionado é ${soma}`
        let media = soma / valores.length
        resposta.innerHTML += `<br>A media dos valores adicionado é ${media}` 
    }
}