<template>
  <div>
    <AppNavbar />
    <div style="margin-top:50px">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppNavbar from '@/components/AppNavbar.vue'

@Component({
  components: {
    AppNavbar
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
html,
body {
  position: absolute;
  right: 7%;
  left: 7%;
}
</style>
