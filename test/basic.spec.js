import { describe, it, expect } from 'vitest'

describe('Basic Vitest Test', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  it('checks a string', () => {
    expect('Student Task Manager').toContain('Task')
  })
})