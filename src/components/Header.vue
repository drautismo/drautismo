<template>
  <header>
    <button id="menu-button" class="material-icons" @click="toggleSidebar">menu</button>
    <img src="../assets/drautismo.png" alt="Dr.Autismo">
    <span id="notification-container">
      <span class="material-icons" id="settings-icon">notifications</span>
      <span id="notification-badge">2</span>
    </span>
  </header>

</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #6200ea;
  color: white;
  padding: 10px;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
}

header img {
  height: auto;
  display: block;
  max-width: 14%;
  margin: 0 auto;
  margin-left: 28%;
}

#menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

#notification-container {
  position: relative;
  display: inline-block;
}

#settings-icon {
  margin-right: 10px;
  font-size: 38px;
}

#notification-badge {
    position: absolute;
    top: 5px; /* Ajusta a posição vertical */
    left: 10px; /* Ajusta a posição horizontal */
    background-color: red;
    color: white;
    font-size: 8px; /* Tamanho de fonte reduzido para 50% */
    width: 12px; /* Reduz o tamanho do círculo */
    height: 12px; /* Reduz o tamanho do círculo */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    line-height: 1; /* Garante que o texto esteja centralizado */
}
</style>