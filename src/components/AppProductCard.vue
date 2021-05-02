<template>
  <div class="card" style="width:30%">
    <div class="card-header">
      <p class="card-header-title">
        {{ productLabel }}
      </p>
    </div>
    <div class="card-content">
      <b-image
        src="https://picsum.photos/id/1074/800/400"
        alt="A random image"
        ratio="6by4"
      ></b-image>
    </div>
    <footer class="card-footer" center v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'
import AppButton from '@/components/AppButton.vue'
@Component({
  components: {
    AppButton
  }
})
export default class Home extends Vue {
  @Prop() productLabel!: string
  @Prop() src!: string
}
</script>
