<template>
  <v-app-bar app color="teal lighten-3" dark clipped-left flat>
    <sidenav-menu :drawer="drawer"></sidenav-menu>
    <v-toolbar color="primary" dark fixed app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
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
};
</script>