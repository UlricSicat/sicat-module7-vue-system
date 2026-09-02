import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('Student Task Management System', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('displays the Student Task Management System', () => {
    const wrapper = mount(App, {
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

    const wrapper = mount(App, {
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

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.vm.tasks).toHaveLength(1)
    expect(wrapper.vm.tasks[0].title).toBe('Mathematics Assignment')
  })

  it('adds a new task successfully', async () => {
    const wrapper = mount(App, {
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

    const wrapper = mount(App, {
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

    const wrapper = mount(App, {
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

    await new Promise(resolve => setTimeout(resolve, 0))

    wrapper.vm.pendingDeleteId = 1
    wrapper.vm.confirmDelete()

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.tasks).toHaveLength(0)
  })
})