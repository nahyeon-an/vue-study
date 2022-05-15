<template>
  <v-navigation-drawer v-model="mutateDrawer" fixed app>
    <v-toolbar flat dark color="success">
      <v-list>
        <!-- <v-list-tile>
          <v-list-tile-title class="title">
            Simply Clinical Software
          </v-list-tile-title>
        </v-list-tile> -->
      </v-list>
    </v-toolbar>
    <v-list dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ "mdi-home-city" }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/login"> Login </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-list-tile to="/login">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->

      <!-- <v-list-tile to="/list">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>List</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidenavMenu",
  data() {
    return {
      mutateDrawer: this.drawer,
    };
  },
  props: {
    drawer: Boolean,
  },
};
</script>