<script setup>
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
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center px-4"
      @click.self="emit('cancel')"
    >
      <div class="bg-white rounded-xl shadow-xl w-full max-w-sm p-5">
        <h3 class="text-base font-semibold text-gray-800 mb-2">{{ title }}</h3>
        <p class="text-sm text-gray-600 mb-5">{{ message }}</p>
        <div class="flex justify-end gap-3">
          <button
            @click="emit('cancel')"
            class="text-sm font-medium px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            @click="emit('confirm')"
            class="text-sm font-medium px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
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
