<template>
  <div class="home">
    <div style="display:flex;flex-wrap: wrap;margin-left:30px">
      <AppProductCard
        v-for="productItem in productItems"
        :key="productItem"
        style="margin-left:15px; margin-top:30px"
      >
        <template v-slot:footer>
          <AppButton
            buttonLabel="Add To Cart"
            icon="plus"
            type="outline"
            size="small"
            class="card-footer-item"
            @click="clickMe"
          />
        </template>
      </AppProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'
import AppProductCard from '@/components/AppProductCard.vue'
import { namespace } from 'vuex-class'
const products = namespace('products')
@Component({
  components: {
    AppProductCard,
    AppButton
  }
})
@Component
export default class Home extends Vue {
  mounted () {
    this.getProductItems()
    console.log(this.productItems)
  }
  @products.State
  public productItems!: Array<any>
  @products.Action
  public getProductItems!: () => void
}
</script>
