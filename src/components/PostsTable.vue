<template>
  <div>
    <h3>Post Table</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostsTable",
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