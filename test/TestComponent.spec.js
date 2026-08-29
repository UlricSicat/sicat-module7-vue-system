import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestComponent from '../src/components/TestComponent.vue'

describe('TestComponent', () => {
  it('displays the provided title', () => {
    const wrapper = mount(TestComponent, {
      props: {
        title: 'Student Task Manager',
      },
    })

    expect(wrapper.text()).toContain('Student Task Manager')
  })

  it('increments the count when the button is clicked', async () => {
    const wrapper = mount(TestComponent)

    expect(wrapper.text()).toContain('Count: 0')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('Count: 1')
  })
})