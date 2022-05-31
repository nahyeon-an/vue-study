<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey" @click="dropdown = !dropdown">
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>Test</p>
    </v-navigation-drawer>

    <dropdown-navbar :isActive="dropdown"></dropdown-navbar>
  </nav>
</template>
<script>
import DropdownNavbar from "./DropdownNavbar.vue";
export default {
  components: { DropdownNavbar },
  name: "Navbar",
  data() {
    return {
      drawer: false,
      dropdown: false,
    };
  },
  watch: {
    drawer() {
      console.log(this.drawer);
    },
    dropdown() {
      console.log(`dropdown: ${this.dropdown}`);
    },
  },
};
</script>