<template>
    <Header @toggle-sidebar="toggleSidebar" />
    <Sidebar :is-open="isSidebarOpen" @close-sidebar="closeSidebar" />
    <main>
      <router-view></router-view>
    </main>
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
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    overflow-y: auto;
    height: calc(100vh - 120px);
    margin-top: 0;
    flex-grow: 1;
    background-color: #f5f5f5;
}
</style>