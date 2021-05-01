<template>
  <b-button
    :type="`is-${type}`"
    :size="`is-${size}`"
    :icon-left="icon"
    v-bind="$attrs"
    @click="$emit('click')"
    >{{ cartLabel ? cartLabel : buttonlabel }}</b-button
  >
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Prop() buttonLabel!: string
  @Prop() cartLabel!: number
  @Prop({ default: 'danger' }) type!: string
  @Prop({ default: 'medium' }) size!: string
  @Prop() icon!: string
}
</script>
