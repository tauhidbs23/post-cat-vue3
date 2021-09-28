<template>
  <div>
    <h3>Category Modal</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "CategoryModal",
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