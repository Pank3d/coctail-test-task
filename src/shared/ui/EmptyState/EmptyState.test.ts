import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyState from './EmptyState.vue'

describe('EmptyState', () => {
  it('should render title', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'No Results',
      },
    })

    expect(wrapper.text()).toContain('No Results')
    expect(wrapper.find('.empty-state__title').text()).toBe('No Results')
  })

  it('should render message when provided', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'No Results',
        message: 'Try a different search',
      },
    })

    expect(wrapper.text()).toContain('Try a different search')
    expect(wrapper.find('.empty-state__message').exists()).toBe(true)
  })

  it('should not render message when not provided', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'No Results',
      },
    })

    expect(wrapper.find('.empty-state__message').exists()).toBe(false)
  })

  it('should render slot content', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'No Results',
      },
      slots: {
        default: '<button>Go Back</button>',
      },
    })

    expect(wrapper.html()).toContain('<button>Go Back</button>')
  })

  it('should have correct CSS classes', () => {
    const wrapper = mount(EmptyState, {
      props: {
        title: 'Test',
      },
    })

    expect(wrapper.find('.empty-state').exists()).toBe(true)
    expect(wrapper.find('.empty-state__title').exists()).toBe(true)
  })
})
