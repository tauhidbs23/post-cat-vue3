<template>
  <div>
    <h3>Category Modal</h3>
    <form>
      <label>Title</label>
      <input type="text" required v-model="title" />
    </form>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "CategoryModal",
  setup() {
    const title = ref("");
    return {
      title,
    };
  },
};
</script>

<style>
</style>