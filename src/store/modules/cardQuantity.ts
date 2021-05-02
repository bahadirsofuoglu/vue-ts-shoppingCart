/* import { VuexModule, Module, Mutation, Action  } from 'vuex-module-decorators'
import axios from 'axios' 
import { Product } from '@/interfaces/Product'
@Module({ namespaced: true})
class Products extends VuexModule {
  public  quentity: number = 0
  public product: Product = {
    category: '',
    id: 0,
    description: '',
    image: '',
    title: '',
    price: 0
  }
  get axles() {
    return this.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				quantity
			}
		})
  } 

  @Mutation
  public ADD_TO_CART(data: Array<Product>): void {
    this.productItems = [...data]
  }
  @Action
  public addToCart (): void{
    axios.get('https://fakestoreapi.com/products').then((response) => {
    this.context.commit('ADD_TO_CART', response.data)
  });
  }
}
export default Products */