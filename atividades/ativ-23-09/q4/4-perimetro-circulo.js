// Exercício 4: Perímetro (circunferência) de um círculo

// Entrada de dados
let raio = Number(prompt("Digite o valor do raio:"));

// Validação
if (isNaN(raio)) {
  console.log("Erro: digite um número válido!");
} else if (raio < 0) {
  console.log("Erro: o raio não pode ser negativo!");
} else {
  // Processamento
  let perimetro = 2 * Math.PI * raio;

  // Saída de dados
  console.log(`O perímetro do círculo é ${perimetro.toFixed(2)}`);
}

// Como pensar: a fórmula da circunferência é 2 * π * raio. Em JavaScript, π já existe pronto: Math.PI.
