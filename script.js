document.getElementById('menu-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px';
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
        { icon: "restaurant", label: "Alimentação" },  // Ícone de talheres padronizado
        { icon: "local_drink", label: "Suplementos" },
        { icon: "local_pharmacy", label: "Medicamentos" },
        { icon: "healing", label: "Terapias" },
        { icon: "medical_services", label: "Equipe de Saúde" },  // Ícone de cruz médica para Equipe de Saúde
        { icon: "interpreter_mode", label: "Interações" },
    ],
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        updateMainContent(section);
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
    if (options.style.display === 'flex') {
        options.style.display = 'none';
    } else {
        options.style.display = 'flex';
    }
});

function showDetails(label) {
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
        <div class="details-container" data-name="Exame de Sangue" data-date="2020-02-10" data-category="blood">
            <h3>Exame de Sangue</h3>
            <span>Responsável: Laboratório XYZ</span>
            <span>Período: 10/02/2020 - Até Hoje</span>
            <span>Função: Verificar se há diabetes</span>
            <span>Categoria: Sangue</span>
        </div>
        <div class="details-container" data-name="Exame de Urina" data-date="2021-03-15" data-category="urine">
            <h3>Exame de Urina</h3>
            <span>Responsável: Laboratório ABC</span>
            <span>Período: 15/03/2021 - 20/03/2021</span>
            <span>Função: Verificar infecção</span>
            <span>Categoria: Urina</span>
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
