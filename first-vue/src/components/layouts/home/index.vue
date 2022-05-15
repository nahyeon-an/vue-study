<template>
  <v-app>
    <header-common></header-common>
    <!-- <sidenav-menu></sidenav-menu> -->
    <!-- <Header />
    <sidenav></sidenav> -->
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/layouts/home/Header.vue";
import Sidenav from "@/components/layouts/home/Sidenav.vue";
import HeaderCommon from "./HeaderCommon.vue";
import SidenavMenu from "./SidenavMenu.vue";

// import HeaderCommon from "@/compoenents/layouts/home/HeaderCommon.vue";
// import SidenavMenu from "@/compoenents/layouts/home/SidenavMenu.vue";

export default {
  name: "HomeLayout",
  components: {
    Header,
    Sidenav,
    HeaderCommon,
    SidenavMenu,
  },
};
</script>