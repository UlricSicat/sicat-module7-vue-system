<script setup>
import { computed } from 'vue'

const props = defineProps({
  tabs: {
    type: Array, // [{ id, label, count }]
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const activeIndex = computed(() => props.tabs.findIndex(t => t.id === props.modelValue))

// The container is always a definite (100%) width, so grid-template-columns
// splits it into perfectly equal tracks — no reliance on any auto-sizing
// edge case. The indicator's width/position math is then always exact,
// because it's dividing a fixed, known width instead of guessing at one.
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.tabs.length}, minmax(0, 1fr))`
}))

const indicatorStyle = computed(() => ({
  width: `calc((100% - 8px) / ${props.tabs.length})`,
  transform: `translateX(${activeIndex.value * 100}%)`,
  transitionTimingFunction: 'var(--ease-spring)'
}))
</script>

<template>
  <div class="relative grid w-full bg-[var(--color-muted)] rounded-full p-1" :style="gridStyle">
    <div
      class="absolute top-1 bottom-1 left-1 rounded-full bg-white shadow-[var(--shadow-soft)] transition-transform duration-300"
      :style="indicatorStyle"
      aria-hidden="true"
    ></div>

    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      @click="emit('update:modelValue', tab.id)"
      class="relative z-10 inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
      :class="tab.id === modelValue ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted-fg)] hover:text-[var(--color-ink)]'"
      :aria-pressed="tab.id === modelValue"
    >
      {{ tab.label }}
      <span
        class="text-xs font-bold min-w-[1.25rem] text-center px-1.5 py-0.5 rounded-full transition-colors duration-200"
        :class="tab.id === modelValue ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'bg-black/5 text-[var(--color-muted-fg)]'"
      >
        {{ tab.count }}
      </span>
    </button>
  </div>
</template>
