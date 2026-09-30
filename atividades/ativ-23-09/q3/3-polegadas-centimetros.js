// Exercício 3: Polegadas para Centímetros

// Entrada de dados
let polegadas = Number(prompt("Digite o valor em polegadas:"));

// Validação
if (isNaN(polegadas)) {
  console.log("Erro: digite um número válido!");
} else {
  // Processamento
  let centimetros = polegadas * 2.54;

  // Saída de dados
  console.log(`${polegadas} polegadas equivalem a ${centimetros.toFixed(2)} cm`);
}

// Como pensar: 1 polegada equivale a 2,54 cm, então basta multiplicar o valor por 2.54.
