<template>
  <div class="home">
    <AppButton />

    <div style="display:flex;flex-wrap: wrap;margin-left:30px">
      <AppProductCard
        v-for="item in 60"
        :key="item"
        style="margin-left:15px; margin-top:30px"
      />
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
