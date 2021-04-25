<template>
  <div class="home">
    <AppButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'

@Component({
  components: {
    AppButton
  }
})
export default class Home extends Vue {}
</script>
