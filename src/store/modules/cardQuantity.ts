 import { VuexModule, Module, Mutation, Action  } from 'vuex-module-decorators'
@Module({ namespaced: true})
class CardQuantity extends VuexModule {
  public  quentity = 0
 
  
/* 
getter sample
  get axles() {
    return this.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				quantity
			}
		})
  }  */

  @Mutation
  public UPDATE_TO_QUANTİTY(): void {
    this.quentity = this.quentity+1
  }
  @Action
  public increase (): void{
    this.context.commit('UPDATE_TO_QUANTİTY')

  }
}
export default CardQuantity 