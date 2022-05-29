<template>
  <div class="home">
    <h1>Buttons</h1>

    <br />

    <a>https://vuetifyjs.com/en/features/breakpoints/</a>
    <br />

    <v-btn class="hidden-md-and-down">Click me</v-btn>
    <v-btn class="hidden-md-and-up">Click me</v-btn>
    <v-btn class="hidden-sm-only">Click me</v-btn>

    <br />

    <v-btn class="pink white--text">Click me</v-btn>
    <!-- depressed : shadow X -->
    <v-btn depressed color="pink">Click Me</v-btn>
    <v-btn text color="pink">Click Me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon small>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>