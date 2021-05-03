<template>
  <div class="home">
    <div style="display:flex;flex-wrap: wrap;margin-left:30px">
      <appProductCard
        v-for="productItem in productItems"
        :key="productItem.title"
        :title="productItem.title"
        :src="productItem.image"
        style="margin-left:15px; margin-top:30px"
      >
        <template v-slot:footer>
          <appButton
            buttonLabel="Add To Cart"
            icon="plus"
            type="outline"
            size="small"
            class="card-footer-item"
            @click="increaseButton"
          />
        </template>
      </appProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'
import AppProductCard from '@/components/AppProductCard.vue'
import { namespace } from 'vuex-class'
const products = namespace('products')
const carts = namespace('cardQuantity')
import { Product } from '@/interfaces/Product'

@Component({
  name: 'Home',
  components: {
    AppButton,
    AppProductCard
  }
})
export default class Home extends Vue {
  mounted () {
    this.getProductItems()
  }

  public increaseButton (): void {
    this.increase()
  }
  @products.State
  public productItems!: Array<Product>
  @carts.State
  public quentity!: number
  @products.Action
  public getProductItems!: () => void
  @carts.Action
  public increase!: () => void
}
</script>
