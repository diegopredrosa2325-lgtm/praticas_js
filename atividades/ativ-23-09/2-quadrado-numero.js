let numero = Number(prompt("Digite um número inteiro:"));

if (isNaN(numero)) {
    console.log("Erro: digite um número válido!");
} else {

    let quadrado = numero * numero;

    console.log(`O quadrado de ${numero} é ${quadrado}`);
}