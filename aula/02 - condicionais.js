const number = 15;

const isPair = number % 2 === 0;

if (number === 0) {
  console.log("O número é inválido");
} else if (isPair) {
  console.log("O número é par!");
} else {
  console.log("O número é ímpar");
}
