import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios' 
@Module({ namespaced: true})
class Products extends VuexModule {
  public  productItems: Array<string> = []
  @Mutation
  public UPDATE_PRODUCT_ITEMS(payload: Array<string>): void {
    this.productItems = payload
  }
  @Action
  public getProductItems(): void {
    axios.get(`/api/products`).then((response: any) => {
    this.context.commit('UPDATE_PRODUCT_ITEMS', response.data)
  });
  }
}
export default Products