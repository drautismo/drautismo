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
        { icon: "book", label: "Diário", path: "diario" },
        { icon: "restaurant", label: "Alimentação", path: "alimentacao" },
        { icon: "local_drink", label: "Suplementos", path: "suplementos" },
        { icon: "medication", label: "Medicamentos", path: "medicamentos" },
        { icon: "healing", label: "Terapias", path: "terapias" },
        { icon: "track_changes", label: "Meta", path: "meta" },
      ]
    }
  }
}
</script>

