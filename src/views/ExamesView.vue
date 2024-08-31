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
          { icon: "science", label: "Exames Laboratoriais", path: "exames_lab" },
          { icon: "biotech", label: "Exames Genéticos", path: "exames_gen" },
          { icon: "psychology", label: "Avaliações Neuropsicológicas", path: "avaliacoes_psico" },
          { icon: "medical_services", label: "Imageamento e Mapeamento", path: "imageamento" },  // Ícone de raio X
          { icon: "search", label: "Pesquisas Diagnósticas", path: "pesquisas_diagnosticas" },  // Ícone de lupa
          { icon: "straighten", label: "Avaliações Físicas", path: "avaliacoes_fisicas" },
        ]
      }
    }
  }
  </script>
  
  