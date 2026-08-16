<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[80] bg-black/40 flex items-start sm:items-center justify-center px-4 py-6 overflow-y-auto"
      @click.self="emit('close')"
    >
      <div class="bg-white rounded-xl shadow-xl w-full max-w-lg relative">
        <button
          @click="emit('close')"
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div class="p-5">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
