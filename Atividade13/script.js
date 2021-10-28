var chkMaiusculo = document.getElementById('maiusculo');
var chkMinusculo = document.getElementById('minusculo');
var texto = document.forms.formulario1.elements["texto"]

chkMinusculo.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        texto.value = texto.value.toLowerCase();
    }
})

chkMaiusculo.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        texto.value = texto.value.toUpperCase();
    }
})