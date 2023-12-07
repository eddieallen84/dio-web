const number = 15;

const isPair = number % 2 === 0;

if (number === 0) {
  console.log("O número é inválido");
} else if (isPair) {
  console.log("O número é par!");
} else {
  console.log("O número é ímpar");
}

console.log("\n*****************\n");

/* Cálculo de média do aluno
Se média for menor do 5 = reprovado
Se for maior ou igual a 5 e menor do que 7 = Recuperação
Se for maior do que 7 = Aprovado
*/

const nota1 = 9;
const nota2 = 8;
const nota3 = 5.5;
const nota4 = 7;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("MÉDIA =", media.toFixed(1));

if (media < 5) {
  console.log("REPROVADO");
} else if (media >= 5 && media < 7) {
  console.log("RECUPERAÇÃO");
} else {
  console.log("APROVADO");
}

console.log("\n*****************\n");

/* Cálcuco de IMC

peso dividido pela altura ao quadrado
Menor que 18.5 - Abaixo do peso ;
Entre 18.5 e 24.9 - Peso normal ;
Entre 25.0 e 29.9 - Acima do peso ;
Entre 30.0 e 39.9 - Obesidade ;
Acima de 40 - Obesidade grave

*/

const altura = 1.74;
const peso = 76;

const imc = peso / (altura ^ 2);

console.log("IMC =", imc.toFixed(1));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obesidade");
} else {
  console.log("Obesidade Grave");
}

console.log("\n*****************\n");
