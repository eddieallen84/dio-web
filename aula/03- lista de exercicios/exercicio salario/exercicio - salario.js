const { gets, print } = require("./funcoes auxiliares");

const valorSalarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function PegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario > 1100 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = PegarAliquota(valorSalarioBruto)
const valorImposto = (calcularPorcentagem(valorSalarioBruto, aliquotaImposto))

const valorTransferir = valorSalarioBruto - valorImposto + valorBeneficios

print(valorTransferir)