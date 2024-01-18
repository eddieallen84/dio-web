class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
  }
}

/*

const eddie = new Pessoa();
eddie.nome = "Eddie Allen Pinto"
eddie.idade = 39;

const vitor = new Pessoa();
vitor.nome = "Vitor da Silva"
vitor.idade = 25; 

*/

const eddie = new Pessoa ("Eddie Allen", 39)
const vitor = new Pessoa ("vitor da Silva" , 25)
console.log(eddie);
console.log(vitor);

eddie.descrever();
vitor.descrever();
