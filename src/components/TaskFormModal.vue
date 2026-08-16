<script setup>
import AppIcon from './icons/AppIcon.vue'

defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[80] bg-[var(--color-ink)]/40 backdrop-blur-sm flex items-start sm:items-center justify-center px-4 py-6 overflow-y-auto"
      @click.self="emit('close')"
    >
      <transition name="modal-pop" appear>
        <div class="bg-white rounded-3xl shadow-[var(--shadow-lift)] w-full max-w-lg relative ring-1 ring-black/5">
          <button
            @click="emit('close')"
            aria-label="Close"
            class="absolute top-4 right-4 w-8 h-8 grid place-items-center rounded-full text-[var(--color-muted-fg)] hover:bg-[var(--color-muted)] hover:text-[var(--color-ink)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
          >
            <AppIcon name="close" class="w-4 h-4" />
          </button>
          <div class="p-6">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-pop-enter-active {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}
.modal-pop-leave-active {
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.modal-pop-enter-from {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
}
.modal-pop-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
