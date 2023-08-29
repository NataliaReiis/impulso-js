function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade`;

}

const pessoa1 = {
    nome: 'Mari',
    idade: 30,
};

const pessoa2 = {
    nome: 'Jose',
    idade: 30,
};

const animal = {
    nome: 'Django',
    idade: 5,
    raca: "demonho",
};

console.log(calculaIdade.apply(pessoa1, [7]))

