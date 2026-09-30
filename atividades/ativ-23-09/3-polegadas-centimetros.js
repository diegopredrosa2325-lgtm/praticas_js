let polegadas = Number(prompt("Digite o valor em polegadas:"));

if (isNaN(polegadas)) {
    console.log("Erro: digite um número válido!");
} else {

    let centimetros = polegadas * 2.54;

    console.log(`${polegadas} polegadas equivalem a ${centimetros.toFixed(2)} cm`);
}