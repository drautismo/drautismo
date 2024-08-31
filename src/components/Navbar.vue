<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }" class="nav-link"><span class="material-icons">event_note</span></router-link>
    <router-link :to="{ name: 'historico' }" class="nav-link"><span class="material-icons">history_edu</span></router-link>
    <router-link :to="{ name: 'exames' }" class="nav-link"><span class="material-icons">show_chart</span></router-link>
    <router-link :to="{ name: 'favoritos' }" class="nav-link"><span class="material-icons">favorite</span></router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6200ea;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.nav-link {
    color: white;
    font-size: 28px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}
</style>