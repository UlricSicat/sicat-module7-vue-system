```vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import AppFooter from './components/AppFooter.vue'
import TaskFormModal from './components/TaskFormModal.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import NotificationToast from './components/NotificationToast.vue'
import TabSwitcher from './components/TabSwitcher.vue'
import AppIcon from './components/icons/AppIcon.vue'

const STORAGE_KEY = 'module7-task-records'

const tasks = ref([])
const searchTerm = ref('')
const editingTask = ref(null)
const showFormModal = ref(false)
const activeTab = ref('ongoing')

// Module 9 filters
const activityFilter = ref('all')
const priorityFilter = ref('all')

const showDeleteConfirm = ref(false)
const pendingDeleteId = ref(null)

const notifications = ref([])
let notificationId = 0

// Load records from localStorage
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)

  try {
    tasks.value = saved ? JSON.parse(saved) : []
  } catch {
    tasks.value = []
  }
})

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value))
}

function notify(message, type = 'info') {
  const id = ++notificationId
  notifications.value.push({ id, message, type })

  setTimeout(() => dismissNotification(id), 3000)
}

function dismissNotification(id) {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

// Modal controls
function openAddTaskModal() {
  editingTask.value = null
  showFormModal.value = true
}

function openEditTaskModal(task) {
  editingTask.value = task
  showFormModal.value = true
}

function closeFormModal() {
  showFormModal.value = false
  editingTask.value = null
}

// Create
function addTask(newTask) {
  tasks.value.push({
    id: Date.now(),
    active: true,
    ...newTask
  })

  saveTasks()
  notify('Task added successfully.', 'success')
  closeFormModal()
}

// Update
function updateTask(updatedFields) {
  const index = tasks.value.findIndex(
    task => task.id === editingTask.value.id
  )

  if (index !== -1) {
    tasks.value[index] = {
      ...tasks.value[index],
      ...updatedFields
    }

    saveTasks()
    notify('Task updated successfully.', 'success')
  }

  closeFormModal()
}

function handleSave(formData) {
  if (editingTask.value) {
    updateTask(formData)
  } else {
    addTask(formData)
  }
}

function handleInvalid(message) {
  notify(message, 'error')
}

// Delete
function requestDelete(id) {
  pendingDeleteId.value = id
  showDeleteConfirm.value = true
}

function cancelDelete() {
  showDeleteConfirm.value = false
  pendingDeleteId.value = null
}

function confirmDelete() {
  const id = pendingDeleteId.value

  tasks.value = tasks.value.filter(task => task.id !== id)

  saveTasks()
  notify('Task deleted.', 'warning')

  if (editingTask.value && editingTask.value.id === id) {
    closeFormModal()
  }

  showDeleteConfirm.value = false
  pendingDeleteId.value = null
}

// Complete / Restore
function toggleComplete(id) {
  const task = tasks.value.find(task => task.id === id)

  if (task) {
    task.status =
      task.status === 'Completed'
        ? 'Pending'
        : 'Completed'

    saveTasks()

    notify(
      task.status === 'Completed'
        ? 'Task marked as completed.'
        : 'Task moved back to ongoing.',
      'success'
    )
  }
}

// Ongoing / Completed
const ongoingTasks = computed(() =>
  tasks.value.filter(task => task.status !== 'Completed')
)

const completedTasks = computed(() =>
  tasks.value.filter(task => task.status === 'Completed')
)

const activeList = computed(() =>
  activeTab.value === 'completed'
    ? completedTasks.value
    : ongoingTasks.value
)

// Search + Activity + Priority filtering
const filteredTasks = computed(() => {
  const keyword = searchTerm.value.toLowerCase().trim()

  return activeList.value.filter(task => {
    // Search
    const title = String(task.title || '').toLowerCase()
    const subject = String(task.subject || '').toLowerCase()

    const matchesSearch =
      !keyword ||
      title.includes(keyword) ||
      subject.includes(keyword)

    // Activity
    // Old records without "active" are treated as Active.
    const matchesActivity =
      activityFilter.value === 'all' ||
      (activityFilter.value === 'active' && task.active !== false) ||
      (activityFilter.value === 'inactive' && task.active === false)

    // Priority
    const matchesPriority =
      priorityFilter.value === 'all' ||
      task.priority === priorityFilter.value

    return (
      matchesSearch &&
      matchesActivity &&
      matchesPriority
    )
  })
})

const pendingCount = computed(() =>
  ongoingTasks.value.length
)

const tabs = computed(() => [
  {
    id: 'ongoing',
    label: 'Ongoing',
    count: ongoingTasks.value.length
  },
  {
    id: 'completed',
    label: 'Completed',
    count: completedTasks.value.length
  }
])
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NotificationToast
      :notifications="notifications"
      @dismiss="dismissNotification"
    />

    <AppHeader
      :total-tasks="tasks.length"
      :pending-tasks="pendingCount"
    />

    <main
      class="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6"
    >
      <div
        class="bg-white rounded-2xl border border-[var(--color-hairline)] shadow-[var(--shadow-soft)] p-5"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h2 class="text-lg font-bold text-[var(--color-ink)]">
              Your Tasks
            </h2>

            <p
              class="text-xs text-[var(--color-muted-fg)] mt-0.5"
            >
              Switch tabs to review tasks you've already finished.
            </p>
          </div>

          <button
            @click="openAddTaskModal"
            class="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] active:scale-[0.96] active:translate-y-0 shadow-[var(--shadow-soft)] self-start sm:self-auto cursor-pointer"
            style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); transition-timing-function: var(--ease-spring);"
          >
            <AppIcon name="plus" class="w-4 h-4" />
            Add Task
          </button>
        </div>

        <div
          class="mt-5 pt-5 border-t border-[var(--color-hairline)] flex flex-col gap-4"
        >
          <TabSwitcher
            v-model="activeTab"
            :tabs="tabs"
          />

          <!-- Search and Filters -->
          <div class="flex flex-col gap-3">
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <!-- Search -->
              <div
                class="relative w-full sm:flex-1"
              >
                <AppIcon
                  name="search"
                  class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted-fg)]"
                />

                <input
                  v-model="searchTerm"
                  type="text"
                  placeholder="Search by title or subject..."
                  class="w-full rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-alt)] pl-10 pr-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 focus:border-[var(--color-primary)] transition-colors"
                />
              </div>

              <!-- Activity Filter -->
              <select
                v-model="activityFilter"
                class="w-full sm:w-auto rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-alt)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 focus:border-[var(--color-primary)] transition-colors"
              >
                <option value="all">
                  All Records
                </option>

                <option value="active">
                  Active
                </option>

                <option value="inactive">
                  Inactive
                </option>
              </select>

              <!-- Priority Filter -->
              <select
                v-model="priorityFilter"
                class="w-full sm:w-auto rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-alt)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 focus:border-[var(--color-primary)] transition-colors"
              >
                <option value="all">
                  All Priorities
                </option>

                <option value="High">
                  High Priority
                </option>

                <option value="Medium">
                  Medium Priority
                </option>

                <option value="Low">
                  Low Priority
                </option>
              </select>
            </div>

            <!-- Result Count -->
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <p
                class="text-xs text-[var(--color-muted-fg)] font-medium"
              >
                Showing {{ filteredTasks.length }} of
                {{ activeList.length }}
                {{
                  activeTab === 'completed'
                    ? 'completed'
                    : 'ongoing'
                }}
                task(s)
              </p>

              <p
                v-if="
                  activityFilter !== 'all' ||
                  priorityFilter !== 'all'
                "
                class="text-xs text-[var(--color-primary)] font-medium"
              >
                Filters applied
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Task List -->
      <TaskList
        :tasks="filteredTasks"
        :variant="activeTab"
        @edit="openEditTaskModal"
        @delete="requestDelete"
        @toggle-complete="toggleComplete"
      />
    </main>

    <AppFooter />

    <!-- Add / Edit Task window -->
    <TaskFormModal
      :visible="showFormModal"
      @close="closeFormModal"
    >
      <TaskForm
        :editing-task="editingTask"
        @save="handleSave"
        @cancel-edit="closeFormModal"
        @invalid="handleInvalid"
      />
    </TaskFormModal>

    <!-- Delete confirmation -->
    <ConfirmDialog
      :visible="showDeleteConfirm"
      title="Delete Task"
      message="Are you sure you want to delete this task? This action cannot be undone."
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
  </div>
</template>
```
