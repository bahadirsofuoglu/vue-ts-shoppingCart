<template>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
html,
body {
  position: absolute;
  right: 7%;
  left: 7%;
}
</style>
