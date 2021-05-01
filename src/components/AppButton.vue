<template>
  <b-button :type="`is-${type}`">{{ label }}</b-button>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Prop() label!: string
  @Prop({ default: 'danger' }) type!: string
}
</script>
