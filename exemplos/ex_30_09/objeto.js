const carro = {
    marco: "toyota",
    modelo: "corola",
    ano: 2015,
    cor: "pink",
    velocidade: 0,
    buzinar: function() {
        console.log("Estou buzinando...");
    },
    acelerar: function() {
        this.velocidade = this.velocidade + 10;
    }
}
console.table(carro);

carro.cor = "verde";

console.table(carro);
console.log(`o ano do carro é: $(carro.ano)`);

carro.buzinar();
carro.acelerar();
carro.acelerar();
console.table(carro);