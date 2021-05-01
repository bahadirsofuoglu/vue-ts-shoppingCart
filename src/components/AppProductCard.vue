<template>
  <div class="card" style="width:30%">
    <div class="card-header">
      <p class="card-header-title">
        {{ productLabel }}
      </p>
    </div>
    <div class="card-content">
      <b-image
        src="https://picsum.photos/600/400"
        alt="A random image"
        ratio="6by4"
        :rounded="rounded"
      ></b-image>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Save</a>
    </footer>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Prop() productLabel!: string
}
</script>
