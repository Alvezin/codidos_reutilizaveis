class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = Number(idade)
    }
}

function textoParaOIf(faixaEtaria){
    console.log(`Você é ${faixaEtaria}`)
}

Pessoa.prototype.checarIdade = function(){
    if (this.idade > 11 && this.idade < 18){
        textoParaOIf('adolescente')
    } else if (this.idade >= 18 && this.idade < 30){
        textoParaOIf('Jovem adulto')
    } else if(this.idade >= 30 && this.idade <=59){
        textoParaOIf('Adulto')
    } else if (this.idade > 59){
        textoParaOIf('Idoso')
    } else {
        textoParaOIf('Criança')
    }
}

const pessoa = new Pessoa('Gabriel', 'Alves dos Santos', 12)

pessoa.checarIdade()

