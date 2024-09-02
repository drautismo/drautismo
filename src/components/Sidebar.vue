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
        <li v-for="(item, index) in menu" :key="item.title" class="menu-group">
          <span @click="toggleSubmenu(index)">{{ item.title }}</span>
          <ul v-if="selectedMenu === index" class="sub-menu">
            <li v-for="subItem in item.submenus" :key="subItem.title">
              <a href="#">{{ subItem.title }}</a>
            </li>
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
  data() {
    return {
      selectedMenu: null,
      menu: [
        {title: "Acompanhamento", submenus: [
          {title: "Neuzanir Costa"},
          {title: "Apolo Costa"},
          {title: "Nicolas Costa"},
        ]},
        {title: "Relatórios", submenus: [
          {title: "Relatório 1"},
          {title: "Relatório 2"},
          {title: "Relatório 3"},
        ]},
        {title: "Configurações", submenus: [
          {title: "Configuração 1"},
          {title: "Configuração 2"},
          {title: "Configuração 3"},
        ]},
        {title: "+Academia da Inclusão", submenus: [
          {title: "Inclusão 1"},
          {title: "Inclusão 2"},
          {title: "Inclusão 3"},
        ]},
      ]
    }
  },
  methods: {
    closeSidebar() {
      this.$emit('close-sidebar')
    },
    toggleSubmenu(index) {
      this.selectedMenu = this.selectedMenu === index ? null : index;
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
  display: block;
  list-style: none;
  padding: 0;
  list-style-type: none;
}

.sub-menu li {
  margin: 10px 0;
}

.sub-menu a {
  color: white;
  text-decoration: none;
}
</style>