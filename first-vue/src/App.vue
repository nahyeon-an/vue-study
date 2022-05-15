<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/layouts/home/Header.vue";
import Sidenav from "@/components/layouts/home/Sidenav.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidenav,
  },
  data: () => ({
    //
  }),
};
</script>
