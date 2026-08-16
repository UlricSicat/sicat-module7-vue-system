<script setup>
import AppIcon from './icons/AppIcon.vue'

defineProps({
  totalTasks: {
    type: Number,
    default: 0
  },
  pendingTasks: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-white/60"
    style="background: rgba(255, 255, 255, 0.72); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex items-center gap-3">
        <div
          class="w-11 h-11 rounded-2xl grid place-items-center text-white shrink-0 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105 hover:rotate-3"
          style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); transition-timing-function: var(--ease-spring);"
        >
          <AppIcon name="clipboard-list" class="w-6 h-6" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl font-bold tracking-tight text-[var(--color-ink)]">
            Student Task Management
          </h1>
          <p class="text-[var(--color-muted-fg)] text-xs sm:text-sm mt-0.5">
            Stay on top of assignments, projects, quizzes, and exams.
          </p>
        </div>
      </div>

      <div class="flex gap-2 text-xs sm:text-sm">
        <div class="flex items-center gap-1.5 bg-[var(--color-muted)] text-[var(--color-ink)] px-3 py-2 rounded-xl font-medium">
          <AppIcon name="clipboard" class="w-4 h-4 text-[var(--color-primary)]" />
          <span>{{ totalTasks }} total</span>
        </div>
        <div class="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-2 rounded-xl font-medium">
          <AppIcon name="bolt" class="w-4 h-4" />
          <span>{{ pendingTasks }} ongoing</span>
        </div>
      </div>
    </div>
  </header>
</template>
