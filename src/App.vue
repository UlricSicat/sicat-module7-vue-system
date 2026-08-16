<script setup>
import { ref, computed, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import AppFooter from './components/AppFooter.vue'

const STORAGE_KEY = 'module7-task-records'

const tasks = ref([])
const searchTerm = ref('')
const editingTask = ref(null)
const feedback = ref({ message: '', type: '' })

// Step 8: Load records from localStorage
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  tasks.value = saved ? JSON.parse(saved) : []
})

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value))
}

function showFeedback(message, type = 'success') {
  feedback.value = { message, type }
  setTimeout(() => {
    feedback.value = { message: '', type: '' }
  }, 2500)
}

// Step 9: Create
function addTask(newTask) {
  tasks.value.push({
    id: Date.now(),
    ...newTask
  })
  saveTasks()
  showFeedback('Task added successfully.', 'success')
}

// Step 12: Update
function updateTask(updatedFields) {
  const index = tasks.value.findIndex(t => t.id === editingTask.value.id)
  if (index !== -1) {
    tasks.value[index] = { ...tasks.value[index], ...updatedFields }
    saveTasks()
    showFeedback('Task updated successfully.', 'success')
  }
  editingTask.value = null
}

function handleSave(formData) {
  if (editingTask.value) {
    updateTask(formData)
  } else {
    addTask(formData)
  }
}

function startEdit(task) {
  editingTask.value = task
}

function cancelEdit() {
  editingTask.value = null
}

// Step 10: Delete with confirmation
function deleteTask(id) {
  const confirmed = window.confirm('Are you sure you want to delete this task?')
  if (!confirmed) return

  tasks.value = tasks.value.filter(task => task.id !== id)
  saveTasks()
  showFeedback('Task deleted.', 'warning')

  if (editingTask.value && editingTask.value.id === id) {
    editingTask.value = null
  }
}

function toggleComplete(id) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.status = task.status === 'Completed' ? 'Pending' : 'Completed'
    saveTasks()
  }
}

// Step 11: Search
const filteredTasks = computed(() => {
  const keyword = searchTerm.value.toLowerCase().trim()
  if (!keyword) return tasks.value
  return tasks.value.filter(
    task =>
      task.title.toLowerCase().includes(keyword) ||
      task.subject.toLowerCase().includes(keyword)
  )
})

const pendingCount = computed(
  () => tasks.value.filter(t => t.status === 'Pending').length
)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppHeader :total-tasks="tasks.length" :pending-tasks="pendingCount" />

    <main class="flex-1 max-w-5xl w-full mx-auto px-4 py-6 space-y-6">
      <!-- Feedback message -->
      <transition name="fade">
        <div
          v-if="feedback.message"
          class="rounded-lg px-4 py-2 text-sm font-medium"
          :class="feedback.type === 'success'
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-amber-100 text-amber-700'"
        >
          {{ feedback.message }}
        </div>
      </transition>

      <TaskForm :editing-task="editingTask" @save="handleSave" @cancel-edit="cancelEdit" />

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div class="relative w-full sm:max-w-xs">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search by title or subject..."
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <p class="text-xs text-gray-500">
          Showing {{ filteredTasks.length }} of {{ tasks.length }} task(s)
        </p>
      </div>

      <TaskList
        :tasks="filteredTasks"
        @edit="startEdit"
        @delete="deleteTask"
        @toggle-complete="toggleComplete"
      />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
