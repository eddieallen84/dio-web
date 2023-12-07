const precoGasolina = 5.63;
const precoEtanol = 3.3;
let kmPorLitroGasolina = 11.2;
let kmPorLitroEtanol = 8.7;
let distanciaEmKm = 700;
let combustivel = "gasolina";

let custoViagemGasolina = (distanciaEmKm / kmPorLitroGasolina) * precoGasolina;
let custoViagemEtanol = (distanciaEmKm / kmPorLitroEtanol) * precoEtanol;

if (combustivel === "gasolina") {
  console.log(
    "Custo da viagem com gasolina R$",
    custoViagemGasolina.toFixed(2)
  );
} else if (combustivel === "etanol") {
  console.log("Custo da viagem com etanol R$", custoViagemEtanol.toFixed(2));
} else {
  console.log("tipo de combustível inválido");
}
