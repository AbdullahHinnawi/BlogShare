import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './authService';
//import {isLoggedIn} from './authService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state){
      state.isLoggedIn = auth.isLoggedIn();
      window.console.log('Vuex.Store.state.isLoggedIn: ' + state.isLoggedIn);
      if(state.isLoggedIn){
        window.console.log('Vuex.Store.state.isLoggedIn:isTRUE: ' + state.isLoggedIn);
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      }else{
        state.userId = null;
        state.username= null;
      }
    }
  },
  actions: {
    authenticate(context){
      window.console.log("Trigger the action which type is 'authenticate' in the store, action will commit mutations" +
          " which will update the state");
      context.commit('authenticate',0);

    }
  },
  modules: {
  }
})
