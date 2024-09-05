<template>
    <div v-if="isOpen" class="popup">
      <div class="popup-content">
        <button class="close-button" @click="$emit('close')">&times;</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GenericPopup',
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 80%;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
  
  .close-button:hover {
    color: #6200ea;
  }
  </style>