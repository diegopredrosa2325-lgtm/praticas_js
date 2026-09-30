const livro = {
    titulo: "Praticas IF",
    autor: "Kauê,Diego,João Paulo",
    paginas: 256,

    resumo: function() {
        return livro.titulo + " foi escrito por " + livro.autor + " e possui " + livro.paginas + " páginas.";
    }
};

document.write(livro.resumo());