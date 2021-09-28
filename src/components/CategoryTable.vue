<template>
  <div>
    <h3>Category Table</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CategoryTable",
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