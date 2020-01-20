const login = {
  state: {
    isLogin: false
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.isLogin = payload.login
    }
  },
  actions: {
    getIsLogin: ({ commit }) => {
      commit({
        type: 'SET_LOGIN',
        login: true
      })
    }
  }
}

export default login
