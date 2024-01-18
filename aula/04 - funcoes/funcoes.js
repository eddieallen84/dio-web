function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(5) + quadrado(6));

console.log('\n-=-=-=-=-=-=-=-=-=-=-\n');

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = valor * (percentualJuros/100);
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(150, 10))