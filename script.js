document.getElementById('menu-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        showFloatingButton();  // Mostra o botão flutuante ao fechar o menu lateral
    } else {
        sidebar.style.left = '0px';
        hideFloatingButton();  // Esconde o botão flutuante ao abrir o menu lateral
    }
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px';
    showFloatingButton();  // Mostra o botão flutuante ao fechar o menu lateral
});

const navItems = {
    section1: [
        { icon: "book", label: "Diário" },
        { icon: "restaurant", label: "Alimentação" },
        { icon: "local_drink", label: "Suplementos" },
        { icon: "local_pharmacy", label: "Medicamentos" },
        { icon: "healing", label: "Terapias" },
        { icon: "my_location", label: "Meta" },  // Ícone de alvo
    ],
    section2: [
        { icon: "flag", label: "Principais Ocorrências" },  // Ícone de bandeira
        { icon: "child_care", label: "Marcos do Desenvolvimento" },
        { icon: "extension", label: "Manifestação Autista" },  // Ícone de quebra-cabeça
        { icon: "all_inclusive", label: "Comorbidades" },  // Ícone substituto ao diagrama de Venn
        { icon: "family_restroom", label: "Condição dos Pais" },
        { icon: "vaccines", label: "Vacinas" },  // Ícone de injeção
    ],
    section3: [
        { icon: "science", label: "Exames Laboratoriais" },
        { icon: "biotech", label: "Exames Genéticos" },
        { icon: "psychology", label: "Avaliações Neuropsicológicas" },
        { icon: "medical_services", label: "Imageamento e Mapeamento" },  // Ícone de raio X
        { icon: "search", label: "Pesquisas Diagnósticas" },  // Ícone de lupa
        { icon: "straighten", label: "Avaliações Físicas" },
    ],
    section4: [
        { icon: "accessibility", label: "Neurofísico" },  // Ícone de músculo
        { icon: "toys", label: "Comportamental" },  // Ícone de blocos empilhados ou joguinho
        { icon: "psychology", label: "Neuromodulação" },  // Ícone do cérebro
        { icon: "biotech", label: "Genético" },  // Ícone do DNA
        { icon: "medical_services", label: "Equipe de Saúde" },  // Mantém o ícone atual
        { icon: "interpreter_mode", label: "Interações" },  // Mantém o ícone atual
    ],
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        updateMainContent(section);
        showFloatingButton();  // Mostra o botão flutuante ao clicar em um link da navbar
    });
});

function updateMainContent(section) {
    const mainContent = document.getElementById('main-content');
    const contentHtml = navItems[section].map(item => `
        <div class="grid-button" onclick="showDetails('${item.label}')">
            <button class="icon-button">
                <span class="material-icons">${item.icon}</span>
            </button>
            <span>${item.label}</span>
        </div>
    `).join('');
    mainContent.innerHTML = `<div class="grid-container">${contentHtml}</div>`;
}

// Carrega os botões do primeiro item da navbar ao iniciar
window.onload = function () {
    updateMainContent('section1');
};

document.getElementById('floating-button').addEventListener('click', function() {
    const options = document.querySelector('.floating-options');
    const icon = this.querySelector('.material-icons');

    if (options.style.display === 'flex') {
        options.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; // Gira o ícone de volta para 0 graus
        icon.textContent = 'add'; // Muda o ícone para "+"
    } else {
        options.style.display = 'flex';
        icon.style.transform = 'rotate(-45deg)'; // Gira o ícone em 45 graus no sentido anti-horário
        icon.textContent = 'remove'; // Muda o ícone para "-"
    }
});

function showDetails(label) {
    hideFloatingButton();  // Esconde o botão flutuante ao clicar em um botão de grid

    const mainContent = document.getElementById('main-content');
    const detailHtml = `
        <div class="details-title">
            <span>Detalhes de ${label}</span>
            <button onclick="showAddItemPopup()">+</button>
        </div>
        <div class="filter-container">
            <select id="sort-select">
                <option value="date">Ordenar por Data</option>
                <option value="name">Ordenar por Nome</option>
                <option value="category">Ordenar por Categoria</option>
            </select>
            <input type="text" id="search-input" placeholder="Pesquisar...">
            <select id="category-select">
                <option value="">Categoria</option>
                <option value="blood">Sangue</option>
                <option value="urine">Urina</option>
                <option value="imaging">Imagem</option>
            </select>
        </div>
        <div class="details-container" data-name="Exame de Sangue" data-date="2020-02-10" data-category="blood" onclick="openDetailPopup(this)">
            <div class="toggle-circle"></div>
            <div class="info">
                <h3>Exame de Sangue</h3>
                <span>Responsável: Laboratório XYZ</span>
                <span>Período: 10/02/2020 - Até Hoje</span>
                <span>Função: Verificar se há diabetes</span>
                <span>Categoria: Sangue</span>
            </div>
            <div class="delete-button"><span class="material-icons">delete</span></div>
        </div>
        <div class="details-container" data-name="Exame de Urina" data-date="2021-03-15" data-category="urine" onclick="openDetailPopup(this)">
            <div class="toggle-circle"></div>
            <div class="info">
                <h3>Exame de Urina</h3>
                <span>Responsável: Laboratório ABC</span>
                <span>Período: 15/03/2021 - 20/03/2021</span>
                <span>Função: Verificar infecção</span>
                <span>Categoria: Urina</span>
            </div>
            <div class="delete-button"><span class="material-icons">delete</span></div>
        </div>
    `;
    mainContent.innerHTML = detailHtml;

    // Adicionar event listeners para ordenação, filtro e pesquisa
    document.getElementById('sort-select').addEventListener('change', function() {
        sortItems(this.value);
    });

    document.getElementById('category-select').addEventListener('change', function() {
        filterItems(this.value);
    });

    document.getElementById('search-input').addEventListener('input', function() {
        searchItems(this.value.toLowerCase());
    });

    addToggleListeners();
}

function addToggleListeners() {
    const toggleCircles = document.querySelectorAll('.toggle-circle');
    toggleCircles.forEach(circle => {
        circle.addEventListener('click', function(e) {
            e.stopPropagation();  // Impede que o clique no círculo abra o popup
            if (this.style.backgroundColor === 'green') {
                this.style.backgroundColor = 'gray';
            } else {
                this.style.backgroundColor = 'green';
            }
        });
    });

    const detailsContainers = document.querySelectorAll('.details-container');
    detailsContainers.forEach(container => {
        container.addEventListener('touchstart', handleTouchStart, false);
        container.addEventListener('touchmove', handleTouchMove, false);
        container.addEventListener('touchend', handleTouchEnd, false);
    });
}

function handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.style.transition = '';
    this.querySelector('.delete-button').style.opacity = '1'; // Mostrar o botão de exclusão imediatamente
    this.querySelector('.delete-button').style.width = '0'; // Reseta a largura do botão de exclusão
}

function handleTouchMove(e) {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - this.touchStartX;
    const maxDeltaX = -this.offsetWidth * 0.1;

    if (deltaX < 0 && deltaX > maxDeltaX) {
        this.style.transform = `translateX(${deltaX}px)`;
        this.querySelector('.delete-button').style.width = `${-deltaX}px`; // Ajusta a largura do botão de exclusão
    }
}

function handleTouchEnd(e) {
    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    const threshold = -this.offsetWidth * 0.05; // Limite de 5%

    if (deltaX < threshold) {
        this.style.transform = `translateX(-${this.offsetWidth * 0.1}px)`;
        this.querySelector('.delete-button').style.width = `${this.offsetWidth * 0.1}px`; // Define a largura do botão de exclusão
    } else {
        this.style.transform = '';
        this.querySelector('.delete-button').style.width = '0'; // Esconde o botão de exclusão
        this.querySelector('.delete-button').style.opacity = '0'; // Esconde o botão de exclusão
    }
    this.style.transition = 'transform 0.3s ease';
}

function openDetailPopup(container) {
    const detailPopup = document.createElement('div');
    detailPopup.classList.add('popup');
    detailPopup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h2>${container.querySelector('h3').textContent}</h2>
            <p>${container.querySelector('.info').innerHTML}</p>
            <p><strong>Descrição:</strong> Descrição detalhada do item... (texto hipotético)</p>
        </div>
    `;
    document.body.appendChild(detailPopup);
    detailPopup.style.display = 'flex';
    detailPopup.style.position = 'fixed';
    detailPopup.style.top = '50px';
    detailPopup.style.left = '50%';
    detailPopup.style.transform = 'translate(-50%, 0)';

    detailPopup.querySelector('.close-popup').addEventListener('click', function() {
        detailPopup.style.display = 'none';
        detailPopup.remove();
    });
}

function sortItems(criteria) {
    const containers = document.querySelectorAll('.details-container');
    const containerArray = Array.from(containers);

    containerArray.sort((a, b) => {
        if (criteria === 'name') {
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        } else if (criteria === 'date') {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        } else if (criteria === 'category') {
            return a.getAttribute('data-category').localeCompare(b.getAttribute('data-category'));
        }
    });

    containerArray.forEach(container => {
        container.parentElement.appendChild(container);
    });
}

function filterItems(category) {
    const containers = document.querySelectorAll('.details-container');

    containers.forEach(container => {
        if (category === "" || container.getAttribute('data-category') === category) {
            container.style.display = '';
        } else {
            container.style.display = 'none';
        }
    });
}

function searchItems(query) {
    const containers = document.querySelectorAll('.details-container');

    containers.forEach(container => {
        if (container.getAttribute('data-name').toLowerCase().includes(query) ||
            container.textContent.toLowerCase().includes(query)) {
            container.style.display = '';
        } else {
            container.style.display = 'none';
        }
    });
}

function showAddItemPopup() {
    const popup = document.getElementById('add-item-popup');
    popup.classList.add('open');
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.transform = 'translateX(0)';
    }, 10);
}

document.querySelector('.close-popup').addEventListener('click', function() {
    const popup = document.getElementById('add-item-popup');
    popup.style.transform = 'translateX(100%)';
    setTimeout(() => {
        popup.classList.remove('open');
        popup.style.display = 'none';
    }, 400);
});

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Adicionar o item à lista (pode ser salvo em uma lista local ou atualizado no DOM)
    const popup = document.getElementById('add-item-popup');
    popup.style.transform = 'translateX(100%)';
    setTimeout(() => {
        popup.classList.remove('open');
        popup.style.display = 'none';
    }, 400);
});

// Funções para controlar a visibilidade do botão flutuante
function hideFloatingButton() {
    const floatingButton = document.getElementById('floating-button');
    floatingButton.style.display = 'none';
}

function showFloatingButton() {
    const floatingButton = document.getElementById('floating-button');
    floatingButton.style.display = 'flex';
}

// Atualização dos ícones nos círculos flutuantes
const floatingOptions = document.querySelectorAll('.floating-option');
const icons = ['emergency', 'help_outline', 'edit', 'shopping_cart', 'event', 'campaign']; // Ícones para Emergência, Dúvida, Caneta, Compra, Consulta, Aviso Geral

floatingOptions.forEach((option, index) => {
    option.querySelector('.material-icons').textContent = icons[index];
});

// JavaScript para a expansão dos subitens
document.querySelectorAll('.menu-group > span').forEach(item => {
    item.addEventListener('click', function() {
        const subMenu = this.nextElementSibling;
        const isOpen = subMenu.style.display === 'block';

        // Fecha todos os submenus abertos
        document.querySelectorAll('.sub-menu').forEach(menu => menu.style.display = 'none');

        // Abre ou fecha o submenu atual
        if (!isOpen) {
            subMenu.style.display = 'block';
        }
    });
});
