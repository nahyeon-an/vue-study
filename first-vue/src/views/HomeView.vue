<template>
  <home-layout>
    <Content />
  </home-layout>
</template>

<script>
import Content from "@/components/Content.vue";
import HomeLayout from "@/components/layouts/home/index.vue";

export default {
  name: "Home",

  components: {
    Content,
    HomeLayout,
  },
};
</script>
