const { gets, print } = require("./funcoes auxiliares");

const quantidade = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidade; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

console.log(maiorValorEncontrado);
