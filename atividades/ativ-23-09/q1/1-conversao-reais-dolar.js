// Exercício 1: Conversão de Reais (R$) para Dólar (US$)

// Entrada de dados
let valorReal = Number(prompt("Digite o valor em reais:"));
let cotacao = Number(prompt("Digite a cotação atual do dólar:"));

// Validação
if (isNaN(valorReal) || isNaN(cotacao)) {
  console.log("Erro: digite valores numéricos válidos!");
} else if (valorReal < 0 || cotacao <= 0) {
  console.log("Erro: os valores devem ser maiores que zero!");
} else {
  // Processamento
  let valorDolar = valorReal / cotacao;

  // Saída de dados
  console.log(`Valor convertido: US$ ${valorDolar.toFixed(2)}`);
}

// Como pensar: para converter reais em dólar, dividimos o valor em reais pela cotação do dólar.
