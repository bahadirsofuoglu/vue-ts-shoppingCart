<template>
  <div class="home">
    <div style="display:flex;flex-wrap: wrap;margin-left:30px">
      <AppProductCard
        v-for="item in 60"
        :key="item"
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
export default class Home extends Vue {
  public clickMe (): void {
    console.log('clicked')
  }
  @products.State
  public name!: string

  @products.Getter
  public nameUpperCase!: string

  @products.Action
  public getProducts!: (newName: string) => void
}
</script>
