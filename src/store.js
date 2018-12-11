import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default function createStore() {
  let store = new Vuex.Store({
    state: {
      home: '',
    },
    actions: {
      getHome({ commit }) {
        return axios.get('http://localhost:8080/api/getHome').then((res) => {
          commit('setHome', res.data);
        });
      },
    },
    mutations: {
      setHome(state, res) {
        state.home = res;
      },
    },
  });
  return store;
}

