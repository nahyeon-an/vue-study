<template>
  <v-app>
    <Header />
    <Sidenav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidenav from "@/components/Sidenav.vue";

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
