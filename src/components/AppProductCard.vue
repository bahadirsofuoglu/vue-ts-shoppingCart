<template>
  <div class="card" style="width:30%">
    <div class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </div>
    <div class="card-content">
      <b-image :src="src" alt="A random image" ratio="6by4"></b-image>
    </div>
    <footer class="card-footer" center v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'
@Component
export default class AppProductCard extends Vue {
  @Prop() title!: string
  @Prop() src!: string
}
</script>
