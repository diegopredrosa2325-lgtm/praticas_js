let raio = Number(prompt("Digite o valor do raio:"));

if (isNaN(raio)) {
    console.log("Erro: digite um número válido!");
} else if (raio < 0) {
    console.log("Erro: o raio não pode ser negativo!");
} else {

    let perimetro = 2 * Math.PI * raio;

    console.log(`O perímetro do círculo é ${perimetro.toFixed(2)}`);
}