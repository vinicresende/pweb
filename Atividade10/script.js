function limpar(){
    document.getElementById("Resposta").style.display = "none";
}

function mostrarNovoAlunoCriado(metodo, Aluno){
    document.getElementById("titulo").innerText = metodo;
    //document.getElementById("Resposta").style.fontSize = "0.5 em";
    document.getElementById("resultado").innerText = "RA: "+ Aluno.Ra + "\nNome: " + Aluno.Nome;
    document.getElementById("Resposta").style.display = "flex";
}


function MetodoUm() {
    limpar();
    const data = ResultadoForm();
    var Aluno = new Object();
    Aluno.Ra = data[0];
    Aluno.Nome = data[1];
    mostrarNovoAlunoCriado("Metodo 1", Aluno);
}

function MetodoDois() {
    limpar();
    const data = ResultadoForm();
    var Aluno = {
        Ra: data[0],
        Nome: data[1]
      }
    mostrarNovoAlunoCriado("Metodo 2", Aluno);
}

function MetodoTres() {
    limpar();
    const data = ResultadoForm();
    var Aluno = new Object();
    Aluno["Ra"] = data[0];
    Aluno["Nome"] = data[1];
    mostrarNovoAlunoCriado("Metodo 3", Aluno);
}

function ResultadoForm(){
    const form = document.getElementById('formulario');
    document.getElementById("Resposta").style.display = "none";

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = new FormData(formulario);

    return ([data.get("RA"),data.get("Nome")]);
}