// Exercício 7: Números ímpares entre dois valores

// Entrada de dados
let inicio = Number(prompt("Digite o valor inicial:"));
let fim = Number(prompt("Digite o valor final:"));

// Validação
if (isNaN(inicio) || isNaN(fim)) {
  console.log("Erro: digite valores numéricos válidos!");
} else {
  // Processamento e saída de dados
  console.log(`Números ímpares entre ${inicio} e ${fim}:`);

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Como pensar: usamos um "for" para percorrer os números entre início e fim.
// O operador % (resto da divisão) verifica se o número é ímpar: se o resto da divisão
// por 2 for diferente de 0, o número é ímpar.
