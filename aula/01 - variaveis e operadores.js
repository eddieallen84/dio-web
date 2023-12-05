const precoGasolina = 5.63;
const precoEtanol = 3.30;
let kmPorLitroGasolina = 11.2;
let kmPorLitroEtanol = 8.7;
let distanciaEmKm = 700;

let custoViagemGasolina = distanciaEmKm / kmPorLitroGasolina * precoGasolina;
let custoViagemEtanol = distanciaEmKm / kmPorLitroEtanol * precoEtanol;

console.log("Custo da viagem com gasolina R$" , custoViagemGasolina.toFixed(2));
console.log("Custo da viagem com etanol R$" , custoViagemEtanol.toFixed(2));

