let n1 = Number(prompt("Digite a nota da N1:"));
let n2 = Number(prompt("Digite a nota da N2:"));

if (isNaN(n1) || isNaN(n2)) {
    console.log("Erro: digite notas válidas!");
} else if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
    console.log("Erro: as notas devem estar entre 0 e 10!");
} else {

    let notaFinal = (n1 * 2 + n2 * 3) / (2 + 3);

    if (notaFinal >= 6) {
        console.log(`Nota final: ${notaFinal.toFixed(2)} - Aprovado!`);
    } else {
        console.log(`Nota final: ${notaFinal.toFixed(2)} - Reprovado.`);
    }
}