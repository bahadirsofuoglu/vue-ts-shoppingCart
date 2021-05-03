<template>
  <b-navbar type="is-light" spaced style="margin-top:30px">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <AppButton :cartLabel="quentity" icon="cart" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'
import { namespace } from 'vuex-class'
const carts = namespace('cardQuantity')
@Component({
  components: {
    AppButton
  }
})
export default class AppNavbar extends Vue {
  @carts.State
  public quentity!: number
}
</script>
<style lang="scss" scoped></style>
