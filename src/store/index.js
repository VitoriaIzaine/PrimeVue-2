import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name: 'Vitoria',
      email:'vitoriaizaine@gmail.com',
    }
  },
  mutations: {
    
    registerUser(state, payLoad){
      state.user.name = payLoad;
      console.log("Nome aterado!!!!!!!!!!!!!!!!");
    }
  },
  actions: {
  },
  modules: {
  }
})
