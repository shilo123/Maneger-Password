import { useRoute, useRouter } from "vue-router";
import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    data: [],
    data2: [],
  },
  mutations: {
    UP_DATA(state, newData) {
      state.data = newData;
      state.data2 = newData;
    },
    async FilterData(state, valSerch) {
      state.data = await axios.get(
        "https://server-pass-404f2e7b3bdf.herokuapp.com/"
      );
      state.data = state.data.data;
      if (valSerch !== "") {
        // console.log("valSerch", valSerch);
        state.data = state.data.filter((e) => {
          return e.Name.includes(valSerch);
        });
      } else {
        state.data = await axios.get(
          "https://server-pass-404f2e7b3bdf.herokuapp.com/"
        );
        state.data = state.data.data;
        console.log(state.data2);
      }
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
