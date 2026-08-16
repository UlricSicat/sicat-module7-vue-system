<script setup>
import AppIcon from './icons/AppIcon.vue'

defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Confirm Action'
  },
  message: {
    type: String,
    default: 'Are you sure?'
  }
})

const emit = defineEmits(['confirm', 'cancel'])
</script>

<template>
  <transition name="confirm-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[90] bg-[var(--color-ink)]/40 backdrop-blur-sm flex items-center justify-center px-4"
      @click.self="emit('cancel')"
    >
      <div class="bg-white rounded-2xl shadow-[var(--shadow-lift)] w-full max-w-sm p-6 ring-1 ring-black/5">
        <div class="w-11 h-11 rounded-full bg-red-50 grid place-items-center mb-4">
          <AppIcon name="exclamation-triangle" class="w-5 h-5 text-red-600" />
        </div>
        <h3 class="text-base font-semibold text-[var(--color-ink)] mb-1.5">{{ title }}</h3>
        <p class="text-sm text-[var(--color-muted-fg)] mb-6">{{ message }}</p>
        <div class="flex justify-end gap-3">
          <button
            @click="emit('cancel')"
            class="text-sm font-medium px-4 py-2.5 rounded-xl bg-[var(--color-muted)] text-[var(--color-ink)] hover:bg-[var(--color-hairline)] active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
          >
            Cancel
          </button>
          <button
            @click="emit('confirm')"
            class="text-sm font-semibold px-4 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.confirm-fade-enter-active,
.confirm-fade-leave-active {
  transition: opacity 0.2s ease;
}
.confirm-fade-enter-from,
.confirm-fade-leave-to {
  opacity: 0;
}
</style>
