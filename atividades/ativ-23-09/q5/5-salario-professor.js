// Exercício 5: Salário de um professor

// Entrada de dados
let valorHoraAula = Number(prompt("Digite o valor da hora-aula:"));
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas:"));

// Validação
if (isNaN(valorHoraAula) || isNaN(horasTrabalhadas)) {
  console.log("Erro: digite valores numéricos válidos!");
} else if (valorHoraAula < 0 || horasTrabalhadas < 0) {
  console.log("Erro: os valores não podem ser negativos!");
} else {
  // Processamento
  let salario = valorHoraAula * horasTrabalhadas;

  // Saída de dados
  console.log(`O salário do professor é R$ ${salario.toFixed(2)}`);
}

// Como pensar: o salário é o valor da hora-aula multiplicado pela quantidade de horas trabalhadas.
