<template>
  <h1>{{ config.API_KEY }}</h1>
  <h2>{{ test }}</h2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const test = ref(0)
console.log(config.API_KEY)
</script>

<script lang="ts">
export default {
  name: 'Test',
  layout: 'empty',
}
</script>

<style scoped></style>
