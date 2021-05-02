import Vue from "vue";
import Vuex from "vuex";
import Products from '@/store/modules/products.module'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {Products}
});
