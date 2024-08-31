<template>
    <GridMenu :gridItems="gridItems"/>
  </template>
  
  <script>
  import GridMenu from '../components/GridMenu.vue'
  
  export default {
    name: 'HomeView',
    components: {
      GridMenu
    },
    data() {
      return {
        gridItems: [
          { icon: "flag", label: "Principais Ocorrências", path: "ocorrencias" },  // Ícone de bandeira
          { icon: "child_care", label: "Marcos do Desenvolvimento", path: "ocorrencias" },
          { icon: "extension", label: "Manifestação Autista", path: "ocorrencias" },  // Ícone de quebra-cabeça
          { icon: "all_inclusive", label: "Comorbidades", path: "ocorrencias" },  // Ícone substituto ao diagrama de Venn
          { icon: "family_restroom", label: "Condição dos Pais", path: "ocorrencias" },
          { icon: "vaccines", label: "Vacinas", path: "ocorrencias" },  // Ícone de injeção
        ]
      }
    }
  }
  </script>
  
  