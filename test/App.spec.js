import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('Student Task Management System', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('displays the Student Task Management System', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Your Tasks')
    expect(wrapper.text()).toContain('Add Task')
  })

  it('allows a user to search for a task', async () => {
    const wrapper = mount(App)

    const searchInput = wrapper.find('input[placeholder="Search by title or subject..."]')

    expect(searchInput.exists()).toBe(true)

    await searchInput.setValue('Mathematics')

    expect(searchInput.element.value).toBe('Mathematics')
  })

  it('shows the correct task count when records are loaded', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Mathematics Assignment',
          subject: 'Mathematics',
          dueDate: '2026-09-01',
          priority: 'Medium',
          status: 'Pending'
        },
        {
          id: 2,
          title: 'Science Project',
          subject: 'Science',
          dueDate: '2026-09-02',
          priority: 'High',
          status: 'Pending'
        }
      ])
    )

    const wrapper = mount(App)

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.text()).toContain('Showing 2 of 2 ongoing task(s)')
  })

  it('opens the Add Task form', async () => {
    const wrapper = mount(App)

    const addButton = wrapper
      .findAll('button')
      .find(button => button.text().includes('Add Task'))

    expect(addButton).toBeTruthy()

    await addButton.trigger('click')

    expect(wrapper.text()).toContain('Add Task')
  })

  it('displays saved task records', async () => {
    localStorage.setItem(
      'module7-task-records',
      JSON.stringify([
        {
          id: 1,
          title: 'Mathematics Assignment',
          subject: 'Mathematics',
          dueDate: '2026-09-01',
          priority: 'Medium',
          status: 'Pending'
        }
      ])
    )

    const wrapper = mount(App)

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.text()).toContain('Mathematics Assignment')
    expect(wrapper.text()).toContain('Mathematics')
  })
})