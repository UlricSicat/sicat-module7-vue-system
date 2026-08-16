<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  editingTask: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel-edit'])

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
  if (!validate()) return

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
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">
      {{ editingTask ? 'Edit Task' : 'Add New Task' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-4" novalidate>
      <div class="sm:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
        <input
          v-model="form.title"
          type="text"
          placeholder="e.g. Finish Software Engineering report"
          class="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          :class="errors.title ? 'border-red-400' : 'border-gray-300'"
        />
        <p v-if="errors.title" class="text-red-500 text-xs mt-1">{{ errors.title }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          placeholder="e.g. Software Engineering 1"
          class="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          :class="errors.subject ? 'border-red-400' : 'border-gray-300'"
        />
        <p v-if="errors.subject" class="text-red-500 text-xs mt-1">{{ errors.subject }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
        <input
          v-model="form.dueDate"
          type="date"
          class="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          :class="errors.dueDate ? 'border-red-400' : 'border-gray-300'"
        />
        <p v-if="errors.dueDate" class="text-red-500 text-xs mt-1">{{ errors.dueDate }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Priority</label>
        <select
          v-model="form.priority"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          v-model="form.status"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div class="sm:col-span-2 flex gap-3 pt-2">
        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          {{ editingTask ? 'Update Task' : 'Add Task' }}
        </button>
        <button
          v-if="editingTask"
          type="button"
          @click="handleCancel"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
