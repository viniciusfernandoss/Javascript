function horario() {
    var hora = window.document.querySelector('p#horaAGR').value
    var agora = new Date()
    hora.innerText = agora.getHours()

}