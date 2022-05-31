<template>
  <div
    class="dropdown-navigation"
    :style="{ top: this.headerHeight + 'px' }"
    v-if="this.isActive"
  >
    <h2>CARD1</h2>
    <h2>CARD2</h2>
    <h2>CARD3</h2>
    <h2>CARD4</h2>
  </div>
</template>

<script>
export default {
  name: "DropdownNavbar",
  data() {
    return {
      headerHeight: 0,
    };
  },
  props: {
    isActive: Boolean,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.headerHeight = document.getElementsByTagName("header")[0].clientHeight;
  },
  methods: {
    handleResize(event) {
      this.headerHeight =
        document.getElementsByTagName("header")[0].clientHeight;
      console.log(event);
    },
  },
  watch: {
    headerHeight() {
      console.log(this.headerHeight);
    },
  },
};
</script>

<style>
div.dropdown-navigation {
  width: 100%;
  position: absolute;
  border: 1px #f5f5f5;
  background-color: white;
  overflow: auto;
  z-index: 10;
}
</style>