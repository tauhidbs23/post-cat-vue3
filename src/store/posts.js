

const state = {
  posts: []
}

const getters = {
  allPost: (state) => {
    return state.posts
  }
}

const actions = {
  testPostAction() {
    console.log('this is vuex form post ');
  },
  async addPost2({ commit }, post) {
    commit('newPost', post);
  },
  async deletePost({ commit }, id) {

    commit('removePost', id)
  },
  async editPost({ commit }, post) {

    commit('updatePost', post);
  }
}

const mutations = {
  setPost: (state, post) => (state.posts = post),
  newPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) => {
    const index = state.posts.findIndex(el => el.id === id)
    state.posts.splice(index, 1);
    // (state.posts = state.posts.filter(post => post.id !== id)),
  },
  updatePost: (state, updPost) => {
    const index = state.posts.findIndex(post => post.id === updPost.id)
    if (index !== -1) {
      state.posts.splice(index, 1, updPost)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}