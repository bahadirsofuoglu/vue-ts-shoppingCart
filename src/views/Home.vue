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
  @products.State
  public productItems!: Array<Product>
  @products.Action
  public getProductItems!: () => void
}
</script>
