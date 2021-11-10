//Limpar Container Resposta -------------------------------------------------
function limpar() {
    document.getElementById("Resposta").style.display = "none";
}

//Validação Formulário ------------------------------------------------------
function Validar() {
    const formulario = document.forms.form;
    const elements = formulario.elements;
    let erro = false;
    let mensagem = 'Corrigir: ';
    alert(elements);

    if (elements['Nome'].value.length < 10) {
        erro = true;
        mensagem += `Nome deve ter mais de 10 caracteres.\n`
    }
    if (elements["email"].value.indexOf('@') == -1 ||
        elements["email"].value.indexOf('.') == -1 ) {
        erro = true;
        mensagem += `Email inconsistente.\n`
    }
    if (elements['comentario'].value.length < 20){
        erro = true;
        mensagem += `Comentario deve ter mais de 20 caracteres.`
    }
    if (elements['nao'].checked){
        alert('Que bom que você voltou a visitar esta pagina!');
    } else {
        alert('Volte sempre à está página!');
    }

    if (!erro) {
        formulario.submit();
    } else {
        alert(mensagem);
    }


};
