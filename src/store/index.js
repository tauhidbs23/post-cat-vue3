import { createStore } from 'vuex'
import categories from "./categories";
import posts from "./posts";

export default createStore({
  modules: {
    categories,
    posts
  }
})
