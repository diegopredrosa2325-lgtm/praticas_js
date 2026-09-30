let valorReal = Number(prompt("Digite o valor em reais:"));
let cotacao = Number(prompt("Digite a cotação atual do dólar:"));

if (isNaN(valorReal) || isNaN(cotacao)) {
    console.log("Erro: digite valores numéricos válidos!");
} else if (valorReal < 0 || cotacao <= 0) {
    console.log("Erro: os valores devem ser maiores que zero!");
} else {

    let valorDolar = valorReal / cotacao;

    console.log(`Valor convertido: US$ ${valorDolar.toFixed(2)}`);
}