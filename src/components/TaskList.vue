<script setup>
defineProps({
  tasks: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['edit', 'delete', 'toggle-complete'])

function priorityClass(priority) {
  return {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-amber-100 text-amber-700',
    Low: 'bg-emerald-100 text-emerald-700'
  }[priority] || 'bg-gray-100 text-gray-700'
}

function statusClass(status) {
  return status === 'Completed'
    ? 'bg-emerald-100 text-emerald-700'
    : 'bg-blue-100 text-blue-700'
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div v-if="tasks.length === 0" class="p-8 text-center text-gray-500 text-sm">
      No tasks found. Try adding a new task or adjusting your search.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Title</th>
            <th class="px-4 py-3">Subject</th>
            <th class="px-4 py-3">Due Date</th>
            <th class="px-4 py-3">Priority</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="task in tasks" :key="task.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium text-gray-800">{{ task.title }}</td>
            <td class="px-4 py-3 text-gray-600">{{ task.subject }}</td>
            <td class="px-4 py-3 text-gray-600">{{ task.dueDate }}</td>
            <td class="px-4 py-3">
              <span class="px-2 py-1 rounded-full text-xs font-medium" :class="priorityClass(task.priority)">
                {{ task.priority }}
              </span>
            </td>
            <td class="px-4 py-3">
              <button
                @click="emit('toggle-complete', task.id)"
                class="px-2 py-1 rounded-full text-xs font-medium transition"
                :class="statusClass(task.status)"
              >
                {{ task.status }}
              </button>
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-end gap-2">
                <button
                  @click="emit('edit', task)"
                  class="text-indigo-600 hover:text-indigo-800 text-xs font-medium px-2 py-1 rounded hover:bg-indigo-50"
                >
                  Edit
                </button>
                <button
                  @click="emit('delete', task.id)"
                  class="text-red-600 hover:text-red-800 text-xs font-medium px-2 py-1 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
