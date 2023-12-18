class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
      return "Obesidade";
    } else {
      return "Obesidade Grave";
    }
  }
}

const jose = new Pessoa("José Augusto", 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
const joao = new Pessoa("João Pedro", 77, 1.6);
console.log(joao);
console.log(joao.calcularImc());
console.log(joao.classificarImc());
const maria = new Pessoa("Maria Clara", 50, 1.65);
console.log(maria);
console.log(maria.calcularImc());
console.log(maria.classificarImc());
