function exibirResultado(tipo) {
    const form = document.getElementById('formulario');
    document.getElementById("Resposta").style.display = "none";

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = new FormData(formulario);

    const numeros = [
        data.get("fN1"),
        data.get("fN2"),
        data.get("fN3")
    ]


    document.getElementById("titulo").innerText = tipo;
    document.getElementById("resultado").innerText = tipo == 'Ordenação: ' ? ordenacao(numeros) : maior(numeros);
    document.getElementById("Resposta").style.display = "flex";
};

function limpar(){
    document.getElementById("Resposta").style.display = "none";
}

function exibirOrdenado() {
    exibirResultado('Ordenação: ');
}

function exibirMaximo() {
    exibirResultado('Maior Numero: ');
}

function ordenacao(numeros) {
    return (numeros.sort((a, b) => a - b)).join(', ');
}

function maior(numeros) {
    return numeros.reduce((a, b) => Math.max(a, b));
}



