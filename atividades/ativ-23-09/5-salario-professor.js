let valorHoraAula = Number(prompt("Digite o valor da hora-aula:"));
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas:"));

if (isNaN(valorHoraAula) || isNaN(horasTrabalhadas)) {
    console.log("Erro: digite valores numéricos válidos!");
} else if (valorHoraAula < 0 || horasTrabalhadas < 0) {
    console.log("Erro: os valores não podem ser negativos!");
} else {

    let salario = valorHoraAula * horasTrabalhadas;

    console.log(`O salário do professor é R$ ${salario.toFixed(2)}`);
}