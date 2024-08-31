<template>
  <Header />
  <Sidebar />
  <router-view></router-view>
  <Navbar />
  <FloatingButton />
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import FloatingButton from './components/FloatingButton.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Navbar,
    FloatingButton
  }
}
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';

/* Add the styles from your original styles.css here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* ... (rest of the styles) ... */
</style>