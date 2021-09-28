<template>
  <div>
    <h3>Categories</h3>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "Categories",
  setup() {
    let name = "Tauhidul";
    let age = 25;

    return {
      name,
      age,
    };
  },
};
</script>

<style>
</style>