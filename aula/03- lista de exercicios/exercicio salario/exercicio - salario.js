const { gets, print } = require("./funcoes auxiliares");

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarPercentualComBaseNoSalario(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario > 1100 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

print(pegarPercentualComBaseNoSalario(valorSalarioBruto));
