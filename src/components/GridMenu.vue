<template>
  <div class="grid-container">
    <div v-for="(item, index) in gridItems" :key="index" class="grid-button" @click="showDetails(item.path)">
      <button class="icon-button">
        <span class="material-icons">{{ item.icon }}</span>
      </button>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridMenu',
  props: ['gridItems'],
  methods: {
    showDetails(path) {
      this.$router.push({ name: 'details', params: { label: path } })
    }
  }
}
</script>

<style scoped>

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0;
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.grid-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #6200ea;
    border-radius: 0;
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
}

.icon-button {
    background: none;
    border: none;
    color: white;
    font-size: 68px;
    cursor: pointer;
    margin-bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}

.icon-button span.material-icons {
    font-size: 68px;
    line-height: 68px;
    width: 68px;
    height: 68px;
}
</style>