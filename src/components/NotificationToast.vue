<script setup>
import AppIcon from './icons/AppIcon.vue'

defineProps({
  notifications: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['dismiss'])

const config = {
  success: { icon: 'check-circle', iconWrap: 'bg-emerald-50 text-emerald-600', bar: 'bg-emerald-500' },
  error: { icon: 'x-circle', iconWrap: 'bg-red-50 text-red-600', bar: 'bg-red-500' },
  warning: { icon: 'exclamation-triangle', iconWrap: 'bg-amber-50 text-amber-600', bar: 'bg-amber-500' },
  info: { icon: 'exclamation-circle', iconWrap: 'bg-indigo-50 text-indigo-600', bar: 'bg-indigo-500' }
}

function styleFor(type) {
  return config[type] || config.info
}
</script>

<template>
  <div class="fixed top-4 right-4 z-[100] flex flex-col gap-2.5 w-80 max-w-[90vw]">
    <transition-group name="toast">
      <div
        v-for="note in notifications"
        :key="note.id"
        class="relative bg-white rounded-2xl shadow-[var(--shadow-lift)] ring-1 ring-black/5 overflow-hidden flex items-start gap-3 pl-4 pr-3 py-3.5"
      >
        <span class="absolute left-0 top-0 bottom-0 w-1" :class="styleFor(note.type).bar" aria-hidden="true"></span>
        <div class="w-8 h-8 rounded-full grid place-items-center shrink-0" :class="styleFor(note.type).iconWrap">
          <AppIcon :name="styleFor(note.type).icon" class="w-4 h-4" />
        </div>
        <p class="text-sm font-medium text-[var(--color-ink)] pt-1 flex-1">{{ note.message }}</p>
        <button
          @click="emit('dismiss', note.id)"
          aria-label="Dismiss notification"
          class="w-7 h-7 grid place-items-center rounded-full text-[var(--color-muted-fg)] hover:bg-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
        >
          <AppIcon name="close" class="w-3.5 h-3.5" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
.toast-leave-active {
  position: absolute;
  width: 100%;
}
</style>
