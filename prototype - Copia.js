class Pessoa{
    constructor(nome, sobrenome, dataNascimento){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.dataNascimento = dataNascimento
    }
}

Pessoa.prototype.idade = function(){
    const trazerDate = new Date();
    const data = trazerDate.getDate
}





const trazerDate = new Date();
const data = trazerDate.getTime();

console.log(data)