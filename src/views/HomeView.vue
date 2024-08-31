<template>
  <main id="main-content">
    <div class="grid-container">
      <div v-for="(item, index) in gridItems" :key="index" class="grid-button" @click="showDetails(item.label)">
        <button class="icon-button">
          <span class="mdi" :class="'mdi-' + item.icon"></span>
        </button>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      gridItems: [
        { icon: "book", label: "Diário" },
        { icon: "food", label: "Alimentação" },
        { icon: "water", label: "Suplementos" },
        { icon: "pill", label: "Medicamentos" },
        { icon: "heart-pulse", label: "Terapias" },
        { icon: "target", label: "Meta" },
      ]
    }
  },
  methods: {
    showDetails(label) {
      this.$router.push({ name: 'details', params: { label } })
    }
  }
}
</script>