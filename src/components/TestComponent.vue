<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Test Component',
  },
})

const count = ref(0)

function increment() {
  count.value++
}
</script>