// Abre a tela de ajuda

function abrirAjuda() {
    var modal = document.getElementById('helpModal');
    modal.style.display = 'block';
}

// Função para fechar a tela de ajuda
function fecharAjuda() {
    var modal = document.getElementById('helpModal');
    modal.style.display = 'none';
}

// Event listener para abrir a ajuda ao clicar no botão de ajuda
document.addEventListener('DOMContentLoaded', function() {
    var helpButton = document.getElementById('helpButton');
    helpButton.addEventListener('click', abrirAjuda);
});