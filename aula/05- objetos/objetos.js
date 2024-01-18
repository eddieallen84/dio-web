const pessoa = {
  nome: "Eddie Allen",
  idade: 39,
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

pessoa.nome = "Marcelle";
pessoa.idade = 34;
pessoa.altura = 1.65;

pessoa.descrever = function () {
  console.log(`minha altura é de ${pessoa.altura}m`);
};

pessoa["altura"] = 1.75;
pessoa.descrever();
console.log(pessoa["idade"]);
