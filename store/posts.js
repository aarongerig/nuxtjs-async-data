export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllPosts({ commit }) {
    const posts = await this.$axios.$get('posts')
    commit('setPosts', posts)
  },

  async fetchPost({ commit }, id) {
    const post = await this.$axios.$get(`posts/${id}`)
    commit('setPost', post)
  }
}

export const mutations = {
  setPost(state, post) {
    state.all.push(post)
  },

  setPosts(state, posts) {
    state.all = posts
  }
}
