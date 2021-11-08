//Remover o espaço da barra de rolagem (Removendo o scrollbar)

// var parent = document.getElementById('container');
// var child = document.getElementById('container-principal');
// child.style.right = child.clientWidth - child.offsetWidth + "px";


// =========================  Dark mode =========================
const $html = document.querySelector('html');
function darkMode() { $html.classList.toggle('dark-mode'); };


// ========================= Animação Skills ============================

const observer = new IntersectionObserver(entries => {
    // Loop pelas entradas
    entries.forEach(entry => {
        // Se o elemento estiver visivel
        if (entry.isIntersecting) {
            // Modifica as classes internas
            entry.target.classList.add(entry.target.classList.value + '-animado');
            
            
        }
    });
});

// Colocar qual classe o observer está observando
observer.observe(document.querySelector('.html5'));
observer.observe(document.querySelector('.css3'));
observer.observe(document.querySelector('.js'));
observer.observe(document.querySelector('.java'));
observer.observe(document.querySelector('.C'));
observer.observe(document.querySelector('.Csharp'));
