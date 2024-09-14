// Bloqueia o botão direito do mouse fora dos campos de texto
document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
        event.preventDefault(); // Impede o menu de contexto padrão

        // Remove qualquer menu de contexto existente
        const existingMenu = document.querySelector('.custom-context-menu');
        if (existingMenu) {
            document.body.removeChild(existingMenu);
        }

        // Cria um novo menu de contexto customizado
        const menu = document.createElement('div');
        menu.className = 'custom-context-menu';
        menu.style.position = 'absolute';
        menu.style.top = `${event.pageY}px`;
        menu.style.left = `${event.pageX}px`;
        menu.style.backgroundColor = '#fff';
        menu.style.border = '1px solid #ccc';
        menu.style.padding = '5px 10px';
        menu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        menu.style.zIndex = '1000';
        menu.style.borderRadius = '5px';

        // Opção de copiar
        const copyOption = document.createElement('div');
        copyOption.innerText = 'Copiar';
        copyOption.style.cursor = 'pointer';
        copyOption.style.padding = '5px';
        copyOption.onclick = function() {
            event.target.select();
            document.execCommand('copy');
            document.body.removeChild(menu);
        };
        menu.appendChild(copyOption);

        // Opção de recortar
        const cutOption = document.createElement('div');
        cutOption.innerText = 'Recortar';
        cutOption.style.cursor = 'pointer';
        cutOption.style.padding = '5px';
        cutOption.onclick = function() {
            event.target.select();
            document.execCommand('cut');
            document.body.removeChild(menu);
        };
        menu.appendChild(cutOption);

        // Opção de colar
        const pasteOption = document.createElement('div');
        pasteOption.innerText = 'Colar';
        pasteOption.style.cursor = 'pointer';
        pasteOption.style.padding = '5px';
        pasteOption.onclick = function() {
            event.target.focus();
            document.execCommand('paste');
            document.body.removeChild(menu);
        };
        menu.appendChild(pasteOption);

        // Estiliza as opções do menu
        const menuItems = [copyOption, cutOption, pasteOption];
        menuItems.forEach(item => {
            item.style.borderBottom = '1px solid #eee';
            item.onmouseenter = function() {
                item.style.backgroundColor = '#f1f1f1';
            };
            item.onmouseleave = function() {
                item.style.backgroundColor = '#fff';
            };
        });

        // Remove a borda inferior da última opção
        menuItems[menuItems.length - 1].style.borderBottom = 'none';

        // Adiciona o menu à página
        document.body.appendChild(menu);

        // Remove o menu quando o usuário clica em qualquer lugar da página
        document.addEventListener('click', function() {
            if (document.body.contains(menu)) {
                document.body.removeChild(menu);
            }
        }, { once: true });
    } else {
        event.preventDefault(); // Bloqueia o botão direito fora dos campos de entrada de texto
    }
});

// Bloqueia teclas de atalho como F12, Ctrl+Shift+I, etc.
document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || // Ctrl+Shift+I e Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
        return false;
    }
};

// Impede arrastar e soltar (proteção extra contra inspeção)
document.ondragstart = function() {
    return false;
};

document.onselectstart = function() {
    return false;
};

// Impede que o DevTools seja aberto usando atalhos não convencionais
window.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) {
        e.preventDefault();
    }
});



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