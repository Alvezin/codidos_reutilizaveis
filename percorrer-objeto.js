class Pessoa{
    constructor(nome, sobrenome, idade, cidade, ){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.cidade = cidade
    }
}

function checar(objeto){ //Função que percorre o objeto para adicionar cada chave e valor como um filho 'li' para o 'ul' ou 'ol'
    for (itens in objeto){
        console.log(`${itens}: ${objeto[itens]}`)
        const lista = document.createElement('li') //aqui pode ser trocado por um elemento pai compativel
        lista.textContent =`${itens}: ${objeto[itens]}`
        textarea.appendChild(lista)
    }
}

function submit(idTextArea, idNome, idSobrenome, idIdade, idCidade){
    const textarea = document.getElementById(idTextArea); //preferível utilizar ul ou ol. mais abaixo é utilizado o appendChild 'li'
    textarea.innerHTML = '';
    const inputNome = document.getElementById(idNome).value;
    const inputSobrenome = document.getElementById(idSobrenome).value;
    const inputIdade = Number(document.getElementById(idIdade).value);
    const inputCidade = document.getElementById(idCidade).value;
    
    const pessoa = new Pessoa(inputNome, inputSobrenome, inputIdade, inputCidade)
    
    checar(pessoa)
    
}


