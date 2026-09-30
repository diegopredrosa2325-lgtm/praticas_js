let inicio = Number(prompt("Digite o valor inicial:"));
let fim = Number(prompt("Digite o valor final:"));

if (isNaN(inicio) || isNaN(fim)) {
    console.log("Erro: digite valores numéricos válidos!");
} else {

    console.log(`Números ímpares entre ${inicio} e ${fim}:`);

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}