const { gets, print } = require("./auxiliar.js");

const n = gets();
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n; ++i) {
  let numero = gets();
  if (numero % 2 === 0) {
    if (numero > maiorPar) {
      maiorPar = numero;
    }
  } else {
    if (menorImpar === 0) {
      menorImpar = numero;
    } else if (numero < menorImpar){
        menorImpar = numero;
    }
  }
}

print('o maior número par: ' + maiorPar);
print('o menor número ímpar: ' + menorImpar);
