import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('Student Task Management System', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  function mountApp() {
    return mount(App, {
      global: {
        stubs: {
          AppHeader: true,
          TaskForm: true,
          TaskList: true,
          AppFooter: true,
          TaskFormModal: true,
          ConfirmDialog: true,
          NotificationToast: true,
          TabSwitcher: true,
          AppIcon: true
        }
      }
    })
  }

  it('displays the Student Task Management System', () => {
    const wrapper = mountApp()

    expect(wrapper.text()).toContain('Your Tasks')
  })

  it('displays saved task records', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Mathematics Assignment',
          subject: 'Mathematics',
          dueDate: '2026-09-05',
          priority: 'Medium',
          status: 'Pending'
        }
      ])
    )

    const wrapper = mountApp()

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.vm.tasks).toHaveLength(1)
    expect(wrapper.vm.tasks[0].title).toBe('Mathematics Assignment')
  })

  it('adds a new task successfully', async () => {
    const wrapper = mountApp()

    wrapper.vm.addTask({
      title: 'Science Project',
      subject: 'Science',
      dueDate: '2026-09-10',
      priority: 'High',
      status: 'Pending'
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.tasks).toHaveLength(1)
    expect(wrapper.vm.tasks[0].title).toBe('Science Project')
    expect(wrapper.vm.tasks[0].subject).toBe('Science')
    expect(wrapper.vm.tasks[0].active).toBe(true)
  })

  it('updates an existing task successfully', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Old Task',
          subject: 'Mathematics',
          dueDate: '2026-09-05',
          priority: 'Medium',
          status: 'Pending'
        }
      ])
    )

    const wrapper = mountApp()

    await new Promise(resolve => setTimeout(resolve, 0))

    wrapper.vm.editingTask = wrapper.vm.tasks[0]

    wrapper.vm.updateTask({
      title: 'Updated Task',
      subject: 'Science',
      dueDate: '2026-09-10',
      priority: 'High',
      status: 'Pending'
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.tasks[0].title).toBe('Updated Task')
    expect(wrapper.vm.tasks[0].subject).toBe('Science')
    expect(wrapper.vm.tasks[0].priority).toBe('High')
  })

  it('deletes an existing task successfully', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Task to Delete',
          subject: 'English',
          dueDate: '2026-09-05',
          priority: 'Low',
          status: 'Pending'
        }
      ])
    )

    const wrapper = mountApp()

    await new Promise(resolve => setTimeout(resolve, 0))

    wrapper.vm.pendingDeleteId = 1
    wrapper.vm.confirmDelete()

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.tasks).toHaveLength(0)
  })

  // Module 9 automated test 1
  it('filters tasks by Active and Inactive status', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Active Task',
          subject: 'Mathematics',
          dueDate: '2026-09-05',
          priority: 'High',
          status: 'Pending',
          active: true
        },
        {
          id: 2,
          title: 'Inactive Task',
          subject: 'Science',
          dueDate: '2026-09-06',
          priority: 'Low',
          status: 'Pending',
          active: false
        }
      ])
    )

    const wrapper = mountApp()

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.vm.filteredTasks).toHaveLength(2)

    wrapper.vm.activityFilter = 'active'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTasks).toHaveLength(1)
    expect(wrapper.vm.filteredTasks[0].title).toBe('Active Task')

    wrapper.vm.activityFilter = 'inactive'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTasks).toHaveLength(1)
    expect(wrapper.vm.filteredTasks[0].title).toBe('Inactive Task')
  })

  // Module 9 automated test 2
  it('filters tasks by priority', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'High Priority Task',
          subject: 'Mathematics',
          dueDate: '2026-09-05',
          priority: 'High',
          status: 'Pending',
          active: true
        },
        {
          id: 2,
          title: 'Medium Priority Task',
          subject: 'Science',
          dueDate: '2026-09-06',
          priority: 'Medium',
          status: 'Pending',
          active: true
        },
        {
          id: 3,
          title: 'Low Priority Task',
          subject: 'English',
          dueDate: '2026-09-07',
          priority: 'Low',
          status: 'Pending',
          active: true
        }
      ])
    )

    const wrapper = mountApp()

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.vm.filteredTasks).toHaveLength(3)

    wrapper.vm.priorityFilter = 'High'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTasks).toHaveLength(1)
    expect(wrapper.vm.filteredTasks[0].title).toBe('High Priority Task')

    wrapper.vm.priorityFilter = 'Low'
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.filteredTasks).toHaveLength(1)
    expect(wrapper.vm.filteredTasks[0].title).toBe('Low Priority Task')
  })
})
