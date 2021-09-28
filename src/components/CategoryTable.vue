<template>
  <div>
    <h3>Category Table</h3>
    {{ allCategory }}
  </div>
</template>

<script>
import { computed } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CategoryTable",
  setup() {
    const allCategory = computed(() => {
      return "tauhidul";
    });

    let name = "Tauhidul";
    let age = 25;

    return {
      allCategory,
    };
  },
};
</script>

<style>
</style>