<template>
  <div>
    <h1>To do list</h1>
    <todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
};
</script>

<style>
</style>