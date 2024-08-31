<template>
  <div id="floating-button" @click="toggleOptions">
    <span class="material-icons">{{ isOpen ? 'remove' : 'add' }}</span>
    <div class="floating-options" v-show="isOpen">
      <div v-for="(option, index) in options" :key="index" class="floating-option">
        <span class="material-icons">{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingButton',
  data() {
    return {
      isOpen: false,
      options: ['emergency', 'help_outline', 'edit', 'shopping_cart', 'event', 'campaign']
    }
  },
  methods: {
    toggleOptions() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
#floating-button {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #5600d4;
  color: white;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1002;
  font-size: 36px;
}

.floating-options {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floating-option {
  background-color: #5600d4;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>