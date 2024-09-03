<template>
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
    <div class="info">
      <h3>Exame de Urina</h3>
      <span>Responsável: Laboratório ABC</span>
      <span>Período: 15/03/2021 - 20/03/2021</span>
      <span>Função: Verificar infecção</span>
      <span>Categoria: Urina</span>
    </div>
    <div class="delete-button"><span class="material-icons">delete</span></div>
  </div>
</template>

<script>
export default {
  name: 'DetailsView',
  // Add any necessary component logic here
}
</script>

<style>
.details-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #6200ea;
  color: white;
  box-sizing: border-box;
}
.details-title button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.filter-container select {
    width: 30%;
}
.filter-container select, .filter-container input {
    padding: 5px;
    font-size: 10px;
    margin-right: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.details-container {
  width: 100%;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 15%;
}
.details-container h3 {
  margin: 0;
  font-size: 9.6px;
  font-weight: bold;
  flex-shrink: 0;
}
.details-container span {
  font-size: 8.4px;
  margin-left: 10px;
  flex-grow: 1;
  text-align: left;
}
</style>