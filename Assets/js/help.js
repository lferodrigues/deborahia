// Desabilitar clique direito e atalhos
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || // Ctrl+Shift+I e Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
        return false;
    }
};
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