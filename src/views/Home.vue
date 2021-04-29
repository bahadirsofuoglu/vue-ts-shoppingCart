<template>
  <div class="home">
    <AppButton />
    <div class="columns is-desktop ">
      <div class="column is-one-third" v-for="item in 2" :key="item">
        <AppProductCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'
import AppProductCard from '@/components/AppProductCard.vue'
@Component({
  components: {
    AppButton,
    AppProductCard
  }
})
export default class Home extends Vue {}
</script>
