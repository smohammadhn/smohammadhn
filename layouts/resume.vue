<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding-block: min(1vw, 1rem);
  background: #eee;
}
</style>
