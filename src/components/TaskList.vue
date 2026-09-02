```vue
<script setup>
import AppIcon from './icons/AppIcon.vue'

const props = defineProps({
  tasks: {
    type: Array,
    default: () => []
  },
  variant: {
    type: String,
    default: 'ongoing'
  }
})

const emit = defineEmits([
  'edit',
  'delete',
  'toggle-complete'
])

const priorityStyles = {
  High: {
    bar: 'bg-red-500',
    badge: 'bg-red-50 text-red-600 ring-1 ring-red-100'
  },
  Medium: {
    bar: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'
  },
  Low: {
    bar: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
  }
}

function priorityStyle(priority) {
  return priorityStyles[priority] || priorityStyles.Medium
}

function formatDate(dateStr) {
  if (!dateStr) return '—'

  const date = new Date(`${dateStr}T00:00:00`)

  if (Number.isNaN(date.getTime())) {
    return dateStr
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function isOverdue(dateStr) {
  if (props.variant === 'completed' || !dateStr) {
    return false
  }

  const due = new Date(`${dateStr}T00:00:00`)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return due < today
}

// Module 9: Activity status
// Older records without an "active" property
// are treated as Active.
function isActive(task) {
  return task.active !== false
}
</script>

<template>
  <!-- Empty State -->
  <div
    v-if="tasks.length === 0"
    class="bg-white rounded-2xl border border-[var(--color-hairline)] shadow-[var(--shadow-soft)] py-16 px-6 text-center"
  >
    <div
      class="w-14 h-14 rounded-2xl bg-[var(--color-muted)] grid place-items-center mx-auto mb-4"
    >
      <AppIcon
        :name="
          variant === 'completed'
            ? 'check-circle'
            : 'inbox'
        "
        class="w-7 h-7 text-[var(--color-primary)]"
      />
    </div>

    <h3 class="text-sm font-semibold text-[var(--color-ink)]">
      {{
        variant === 'completed'
          ? 'No completed tasks yet'
          : 'No ongoing tasks'
      }}
    </h3>

    <p
      class="text-sm text-[var(--color-muted-fg)] mt-1 max-w-xs mx-auto"
    >
      {{
        variant === 'completed'
          ? 'Tasks you mark as complete will show up here.'
          : 'Try a different search term or filter, or add a new task to get started.'
      }}
    </p>
  </div>

  <!-- Task List -->
  <ul
    v-else
    class="space-y-3"
  >
    <li
      v-for="task in tasks"
      :key="task.id"
      class="group relative bg-white rounded-2xl border border-[var(--color-hairline)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
      style="transition-timing-function: var(--ease-spring);"
      :class="
        variant === 'completed'
          ? 'opacity-80 hover:opacity-100'
          : ''
      "
    >
      <div class="flex">

        <!-- Priority Indicator -->
        <span
          class="w-1.5 shrink-0"
          :class="
            variant === 'completed'
              ? 'bg-emerald-500'
              : priorityStyle(task.priority).bar
          "
          aria-hidden="true"
        ></span>

        <div
          class="flex-1 min-w-0 px-4 sm:px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >

          <!-- Task Information -->
          <div class="flex-1 min-w-0">

            <!-- Title and Badges -->
            <div
              class="flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <h3
                class="font-semibold text-[var(--color-ink)] truncate"
                :class="
                  variant === 'completed'
                    ? 'line-through decoration-2 decoration-[var(--color-muted-fg)]/50'
                    : ''
                "
              >
                {{ task.title }}
              </h3>

              <!-- Completed Badge -->
              <span
                v-if="variant === 'completed'"
                class="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 inline-flex items-center gap-1"
              >
                <AppIcon
                  name="check"
                  class="w-3 h-3"
                />
                Done
              </span>

              <!-- Priority Badge -->
              <span
                v-else
                class="text-xs font-medium px-2 py-0.5 rounded-full"
                :class="priorityStyle(task.priority).badge"
              >
                {{ task.priority }}
              </span>

              <!-- Activity Badge -->
              <span
                class="text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                :class="
                  isActive(task)
                    ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                    : 'bg-slate-100 text-slate-600 ring-1 ring-slate-200'
                "
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="
                    isActive(task)
                      ? 'bg-blue-500'
                      : 'bg-slate-400'
                  "
                ></span>

                {{ isActive(task) ? 'Active' : 'Inactive' }}
              </span>
            </div>

            <!-- Subject and Due Date -->
            <div
              class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-[var(--color-muted-fg)]"
            >
              <!-- Subject -->
              <span class="inline-flex items-center gap-1">
                <AppIcon
                  name="clipboard"
                  class="w-3.5 h-3.5"
                />

                {{ task.subject }}
              </span>

              <!-- Due Date -->
              <span
                class="inline-flex items-center gap-1"
                :class="
                  isOverdue(task.dueDate)
                    ? 'text-red-600 font-medium'
                    : ''
                "
              >
                <AppIcon
                  name="calendar"
                  class="w-3.5 h-3.5"
                />

                {{ formatDate(task.dueDate) }}

                <span
                  v-if="isOverdue(task.dueDate)"
                >
                  &middot; overdue
                </span>
              </span>
            </div>
          </div>

          <!-- Task Actions -->
          <div
            class="flex items-center gap-2 shrink-0 self-start sm:self-center"
          >

            <!-- Complete / Restore -->
            <button
              type="button"
              @click="
                emit(
                  'toggle-complete',
                  task.id
                )
              "
              class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl min-h-[36px] cursor-pointer transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
              :class="
                variant === 'completed'
                  ? 'bg-[var(--color-muted)] text-[var(--color-ink)] hover:bg-amber-500 hover:text-white'
                  : 'bg-[var(--color-muted)] text-[var(--color-ink)] hover:bg-[var(--color-primary)] hover:text-white'
              "
            >
              <AppIcon
                :name="
                  variant === 'completed'
                    ? 'restore'
                    : 'check-circle'
                "
                class="w-4 h-4"
              />

              {{
                variant === 'completed'
                  ? 'Restore'
                  : 'Complete'
              }}
            </button>

            <!-- Edit -->
            <button
              type="button"
              @click="emit('edit', task)"
              aria-label="Edit task"
              class="w-9 h-9 grid place-items-center rounded-xl text-[var(--color-muted-fg)] hover:bg-[var(--color-muted)] hover:text-[var(--color-primary)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
            >
              <AppIcon
                name="edit"
                class="w-4 h-4"
              />
            </button>

            <!-- Delete -->
            <button
              type="button"
              @click="emit('delete', task.id)"
              aria-label="Delete task"
              class="w-9 h-9 grid place-items-center rounded-xl text-[var(--color-muted-fg)] hover:bg-red-50 hover:text-red-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
            >
              <AppIcon
                name="trash"
                class="w-4 h-4"
              />
            </button>

          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
```
