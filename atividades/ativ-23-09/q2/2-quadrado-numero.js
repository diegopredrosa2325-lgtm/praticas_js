// Exercício 2: Quadrado de um número

// Entrada de dados
let numero = Number(prompt("Digite um número inteiro:"));

// Validação
if (isNaN(numero)) {
  console.log("Erro: digite um número válido!");
} else {
  // Processamento
  let quadrado = numero * numero;

  // Saída de dados
  console.log(`O quadrado de ${numero} é ${quadrado}`);
}

// Como pensar: o quadrado de um número é ele multiplicado por si mesmo (numero * numero).
