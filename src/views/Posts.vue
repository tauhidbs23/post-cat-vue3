<template>
  <div>
    <h3>Post</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "Posts",
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