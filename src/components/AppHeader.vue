<script setup>
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
  <header class="bg-indigo-700 text-white shadow-md">
    <div class="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 class="text-xl sm:text-2xl font-bold tracking-tight">
          Student Task Management System
        </h1>
        <p class="text-indigo-100 text-sm mt-1">
          Organize your assignments, projects, quizzes, and exam schedules in one place.
        </p>
      </div>
      <div class="flex gap-2 text-sm">
        <span class="bg-indigo-600/60 px-3 py-1.5 rounded-lg">
          Total: <strong>{{ totalTasks }}</strong>
        </span>
        <span class="bg-amber-500/80 px-3 py-1.5 rounded-lg">
          Pending: <strong>{{ pendingTasks }}</strong>
        </span>
      </div>
    </div>
  </header>
</template>
