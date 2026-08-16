<script setup>
import { reactive, watch } from 'vue'
import AppIcon from './icons/AppIcon.vue'

const props = defineProps({
  editingTask: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel-edit', 'invalid'])

const emptyForm = () => ({
  title: '',
  subject: '',
  dueDate: '',
  priority: 'Medium',
  status: 'Pending'
})

const form = reactive(emptyForm())
const errors = reactive({ title: '', subject: '', dueDate: '' })

watch(
  () => props.editingTask,
  (task) => {
    if (task) {
      Object.assign(form, {
        title: task.title,
        subject: task.subject,
        dueDate: task.dueDate,
        priority: task.priority,
        status: task.status
      })
    } else {
      Object.assign(form, emptyForm())
    }
    clearErrors()
  },
  { immediate: true }
)

function clearErrors() {
  errors.title = ''
  errors.subject = ''
  errors.dueDate = ''
}

function validate() {
  clearErrors()
  let valid = true

  if (!form.title.trim()) {
    errors.title = 'Task title is required.'
    valid = false
  }
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required.'
    valid = false
  }
  if (!form.dueDate) {
    errors.dueDate = 'Due date is required.'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) {
    emit('invalid', 'Please fill in all required fields: Title, Subject, and Due Date.')
    return
  }

  emit('save', { ...form })

  if (!props.editingTask) {
    Object.assign(form, emptyForm())
  }
}

function handleCancel() {
  Object.assign(form, emptyForm())
  clearErrors()
  emit('cancel-edit')
}

const inputBase =
  'w-full rounded-xl border bg-[var(--color-surface-alt)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 focus:border-[var(--color-primary)]'
</script>

<template>
  <div>
    <div class="flex items-center gap-3 mb-5 pr-6">
      <div class="w-10 h-10 rounded-xl grid place-items-center bg-[var(--color-muted)] text-[var(--color-primary)] shrink-0">
        <AppIcon :name="editingTask ? 'edit' : 'plus'" class="w-5 h-5" />
      </div>
      <div>
        <h2 class="text-base font-semibold text-[var(--color-ink)]">
          {{ editingTask ? 'Edit Task' : 'Add New Task' }}
        </h2>
        <p class="text-xs text-[var(--color-muted-fg)]">
          {{ editingTask ? 'Update the details below.' : 'Fill in the details to create a task.' }}
        </p>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-4" novalidate>
      <div class="sm:col-span-2">
        <label class="block text-xs font-semibold text-[var(--color-ink)]/80 mb-1.5">Task Title</label>
        <input
          v-model="form.title"
          type="text"
          placeholder="e.g. Finish Software Engineering report"
          :class="[inputBase, errors.title ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : 'border-[var(--color-hairline)]']"
        />
        <p v-if="errors.title" class="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <AppIcon name="exclamation-circle" class="w-3.5 h-3.5" />
          {{ errors.title }}
        </p>
      </div>

      <div>
        <label class="block text-xs font-semibold text-[var(--color-ink)]/80 mb-1.5">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          placeholder="e.g. Software Engineering 1"
          :class="[inputBase, errors.subject ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : 'border-[var(--color-hairline)]']"
        />
        <p v-if="errors.subject" class="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <AppIcon name="exclamation-circle" class="w-3.5 h-3.5" />
          {{ errors.subject }}
        </p>
      </div>

      <div>
        <label class="block text-xs font-semibold text-[var(--color-ink)]/80 mb-1.5">Due Date</label>
        <input
          v-model="form.dueDate"
          type="date"
          :class="[inputBase, errors.dueDate ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : 'border-[var(--color-hairline)]']"
        />
        <p v-if="errors.dueDate" class="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <AppIcon name="exclamation-circle" class="w-3.5 h-3.5" />
          {{ errors.dueDate }}
        </p>
      </div>

      <div>
        <label class="block text-xs font-semibold text-[var(--color-ink)]/80 mb-1.5">Priority</label>
        <select v-model="form.priority" :class="[inputBase, 'border-[var(--color-hairline)] cursor-pointer']">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-semibold text-[var(--color-ink)]/80 mb-1.5">Status</label>
        <select v-model="form.status" :class="[inputBase, 'border-[var(--color-hairline)] cursor-pointer']">
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div class="sm:col-span-2 flex gap-3 pt-2">
        <button
          type="submit"
          class="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] active:scale-[0.96] active:translate-y-0 shadow-[var(--shadow-soft)] cursor-pointer"
          style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); transition-timing-function: var(--ease-spring);"
        >
          <AppIcon :name="editingTask ? 'check' : 'plus'" class="w-4 h-4" />
          {{ editingTask ? 'Update Task' : 'Add Task' }}
        </button>
        <button
          v-if="editingTask"
          type="button"
          @click="handleCancel"
          class="text-[var(--color-ink)] text-sm font-medium px-5 py-2.5 rounded-xl bg-[var(--color-muted)] hover:bg-[var(--color-hairline)] active:scale-[0.96] transition-all duration-200 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
