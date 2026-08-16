<script setup>
defineProps({
  notifications: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['dismiss'])

const styles = {
  success: 'bg-emerald-600 border-emerald-700',
  error: 'bg-red-600 border-red-700',
  warning: 'bg-amber-500 border-amber-600',
  info: 'bg-indigo-600 border-indigo-700'
}
</script>

<template>
  <div class="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-72 max-w-[90vw]">
    <transition-group name="toast">
      <div
        v-for="note in notifications"
        :key="note.id"
        class="text-white text-sm font-medium rounded-lg shadow-lg border-l-4 px-4 py-3 flex items-start justify-between gap-3"
        :class="styles[note.type] || styles.info"
      >
        <span>{{ note.message }}</span>
        <button
          @click="emit('dismiss', note.id)"
          class="text-white/80 hover:text-white leading-none text-base"
          aria-label="Dismiss notification"
        >
          &times;
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
