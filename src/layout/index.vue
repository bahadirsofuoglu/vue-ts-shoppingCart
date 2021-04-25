<template>
  <div>
    <navbar />
    <div style="margin-top:50px">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbar from '@/layout/navbar.vue'

@Component({
  components: {
    navbar
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped></style>
