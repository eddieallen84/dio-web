class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;

  }
  
  calcularGastoViagem(distancia, valorGasolina){
    return distancia * this.gastoMedioKm * valorGasolina;
  }
}


const uno = new Carro ('Fiat', 'vermelho', 1 / 14);
const celta = new Carro('Chevrolet', 'preto', 1 / 12);


console.log(uno);
console.log(celta);

console.log(uno.calcularGastoViagem(700, 5.42))

