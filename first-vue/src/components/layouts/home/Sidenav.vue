<template>
  <v-navigation-drawer app absolute permanent left clipped expand-on-hover>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{
            $store.state.username || "Anonymous"
          }}</v-list-item-title>
          <v-list-item-subtitle v-if="isUserLogin"
            >Logged In</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <!-- Home -->
        <v-list-item-icon>
          <v-icon>{{ "mdi-home-city" }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/home"> Home </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <!-- About -->
        <v-list-item-icon>
          <v-icon>{{ "mdi-account" }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/about"> About </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <!-- About -->
        <v-list-item-icon>
          <v-icon>{{ "mdi-account-group-outline" }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/list"> List </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <!-- Login -->
        <v-list-item-icon>
          <v-icon>{{ "mdi-account-group-outline" }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/login"> Login </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>