<template>
  <v-app-bar app color="teal lighten-3" dark fixed>
    <sidenav-menu :propDrawer="drawer"></sidenav-menu>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <!-- <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat dark color="success">
        <v-list>
          <v-list-item> Simply Clinical Software </v-list-item>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ "mdi-home-city" }}</v-icon>
          </v-list-item-icon>
          <router-link to="/login"> Login </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import SidenavMenu from "./SidenavMenu.vue";
export default {
  components: { SidenavMenu },
  name: "HeaderCommon",
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    drawer(newDrawer) {
      console.log(`new drawer : ${newDrawer}`);
    },
  },
};
</script>