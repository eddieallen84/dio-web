function tabuada(numero) {
  console.log(`\n**** TABUADA DE ${numero} ****\n`);
  for (let i = 0; i < 11; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5);
