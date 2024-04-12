var pessoa = {
    nome: 'Vinicius', 
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}
console.log(pessoa)
pessoa.engordar(-25)
console.log(pessoa)