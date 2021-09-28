

const state = {
  category: []
}

const getters = {
  allCategory: (state) => {
    return state.category
  }
}

const actions = {
  testCategoryAction() {
    console.log('this.is vuex form category ');
  },

  async addCategory2({ commit }, category) {
    console.log('from vuex', category);
    commit('newCategory', category);
  },
  async deleteCategory({ commit }, id) {
    commit('removeCategory', id)
  },
  async editCategory({ commit }, category) {
    commit('updateCategory', category);
  }
}

const mutations = {
  setCategory: (state, category) => (state.category = category),
  newCategory: (state, category) => state.category.unshift(category),
  removeCategory: (state, id) => {
    const index = state.category.findIndex(el => el.id === id);
    state.category.splice(index, 1);
    // (state.category = state.category.filter(category => category.id !== id)),
  },
  updateCategory: (state, updCategory) => {
    const index = state.category.findIndex(category => category.id === updCategory.id)
    if (index !== -1) {
      state.category.splice(index, 1, updCategory)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}