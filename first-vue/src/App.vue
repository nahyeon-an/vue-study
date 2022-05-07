<template>
  <v-app>
    <Header />
    <Sidenav />
    <v-main>
      <todo-list />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidenav from "@/components/Sidenav.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidenav,
    TodoList,
  },
  data: () => ({
    //
  }),
};
</script>
