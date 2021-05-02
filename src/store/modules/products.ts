import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios' 
import { Product } from '@/interfaces/Product'
@Module({ namespaced: true})
class Products extends VuexModule {
  public  productItems: Array<Product> = []
  public product: Product = {
    category: '',
    id: 0,
    description: '',
    image: '',
    title: '',
    price: 0
  }
  @Mutation
  public updateProductItems(data: Array<Product>): void {
    this.productItems = [...data]
  }
  @Action
  public getProductItems (): void{
    axios.get('https://fakestoreapi.com/products').then((response) => {
    this.context.commit('updateProductItems', response.data)
  });
  }
}
export default Products