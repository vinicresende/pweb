function AbrirJanela() {
    document.querySelector("#Janela").setAttribute('src', 'window-open.jpg');
    document.getElementById("Titulo").innerText = 'Feche a Janela';
};
function FecharJanela() {
    document.querySelector("#Janela").setAttribute('src', 'window-closed.jpg');
    document.getElementById("Titulo").innerText = 'Abra a Janela';
};
function QuebrarJanela() {
    document.querySelector("#Janela").setAttribute('src', 'window-broken.jpg');
    document.getElementById("Titulo").innerText = 'Quebrou a Janela';
}
