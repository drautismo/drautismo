<template>
  <aside id="sidebar" :class="{ 'open': isOpen }">
    <div class="user-profile">
        <img src="../assets/profile.jpg" alt="User Photo">
        <div>
            <p>Neuzanir Costa</p>
            <a href="#">Ver Perfil</a>
        </div>
    </div>
    <nav>
        <ul>
            <li class="menu-group">
                <span>Acompanhamento</span>
                <ul class="sub-menu">
                    <li><a href="#">Neuzanir Costa</a></li>
                    <li><a href="#">Apolo Costa</a></li>
                    <li><a href="#">Nicolas Costa</a></li>
                </ul>
            </li>
            <li class="menu-group">
                <span>Relatórios</span>
                <ul class="sub-menu">
                    <li><a href="#">Relatório 1</a></li>
                    <li><a href="#">Relatório 2</a></li>
                    <li><a href="#">Relatório 3</a></li>
                    <li><a href="#">Relatório 4</a></li>
                </ul>
            </li>
            <li class="menu-group">
                <span>Configurações</span>
                <ul class="sub-menu">
                    <li><a href="#">Configuração 1</a></li>
                    <li><a href="#">Configuração 2</a></li>
                    <li><a href="#">Configuração 3</a></li>
                    <li><a href="#">Configuração 4</a></li>
                </ul>
            </li>
            <li class="menu-group">
                <span>+Academia da Inclusão</span>
                <ul class="sub-menu">
                    <li><a href="#">Inclusão 1</a></li>
                    <li><a href="#">Inclusão 2</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <button class="logout-button">Sair</button>
    <button @click="closeSidebar" class="material-icons close-sidebar">close</button>
</aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSidebar() {
      this.$emit('close-sidebar')
    }
  }
}
</script>

<style scoped>
aside {
  position: fixed;
  left: -250px;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #6200ea;
  color: white;
  padding: 0px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  transition: left 0.3s ease;
  z-index: 1001;
}

aside.open {
  left: 0;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-profile p {
    margin: 0;
}

.user-profile a {
    font-size: 12px;
    color: #bbb;
    text-decoration: none;
}

.menu-group {
  margin-bottom: 15px;
}

.menu-group > span {
  cursor: pointer;
  font-weight: bold;
}

.logout-button:hover {
    background-color: #cc2d2d;
}
.logout-button {
    width: 100%;
    padding: 10px;
    background-color: #ff3b3b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.close-sidebar {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.sub-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.sub-menu.open {
  max-height: 500px; /* Adjust this value based on your needs */
}

.sub-menu li {
  margin-left: 20px;
  margin-top: 10px;
}

.sub-menu a {
  color: white;
  text-decoration: none;
}
</style>