<template>
  <div>
    <h3>Post Modal</h3>
    <form>
      <label>Title</label>
      <input type="text" required v-model="title" />

      <label>Category</label>
      <input type="text" v-model="newcategory" />
      <select>
        <option value="entertainment">entertainment</option>
        <option value="politice">politice</option>
        <option value="bangladesh">Bangladesh</option>
      </select>

      <label>details</label>
      <input type="text" required v-model="details" />
    </form>
    <p>title: {{ title }}</p>
    <p>new category: {{ newcategory }}</p>
    <p>category: {{ category }}</p>
    <p>details: {{ details }}</p>
    <p>age: {{ age }}</p>
    <button @click="age++">add age</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "PostModal",
  setup() {
    const title = ref("");
    const newcategory = ref("");
    const category = ref("");
    const details = ref("");
    const age = ref(30);

    const savePost = () => {
      console.log("you click me ");
    };
    return {
      title,
      newcategory,
      category,
      details,
      savePost,
      age,
    };
  },
};
</script>

<style>
</style>