<template>
  <b-button
    :type="`is-${type}`"
    :size="`is-${size}`"
    :icon-left="icon"
    v-bind="$attrs"
    @click="$emit('click')"
    >{{ label }}</b-button
  >
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class AppButton extends Vue {
  @Prop() buttonLabel!: string
  @Prop() cartLabel!: number
  @Prop({ default: 'danger' }) type!: string
  @Prop({ default: 'medium' }) size!: string
  @Prop() icon!: string

  get label (): any {
    if (this.cartLabel) {
      return this.cartLabel
    }
    return this.buttonLabel
  }
}
</script>
