<template>
  <v-navigation-drawer v-model="drawer" :stateless="false" fixed app temporary>
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
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidenavMenu",
  data() {
    return {};
  },
  props: {
    propDrawer: Boolean,
  },
  computed: {
    drawer: {
      get() {
        return this.propDrawer;
      },
      set(newDrawer) {
        this.$emit("update:drawer", newDrawer);
      },
    },
  },
};
</script>