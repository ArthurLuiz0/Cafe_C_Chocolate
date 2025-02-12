const urlParams = new URLSearchParams(window.location.search);

document.getElementById('nome').textContent = urlParams.get('nome');
document.getElementById('telefone').textContent = urlParams.get('telefone');
document.getElementById('mensagem').textContent = urlParams.get('mensagem');