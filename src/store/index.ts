import Vue from "vue";
import Vuex from "vuex";
import products from '@/store/modules/products'
import cardQuantity from '@/store/modules/cardQuantity'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {products,cardQuantity}
});
