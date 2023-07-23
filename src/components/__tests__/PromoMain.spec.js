import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PromoMain from '../PromoMain.vue'

describe('PromoMain', () => {
  it('renders properly', () => {
    const wrapper = mount(PromoMain, { props: { 
      heading: 'Heading', 
      paragraph: 'Para1',
      imageUrl: 'img1.jpg',
      ctaText: 'Action',
      ctaUrl: 'google.com'
    } })
    const heading = wrapper.find('h2');
    const paragraph = wrapper.find('p');
    const img = wrapper.find('img');
    const cta = wrapper.find('a');
    expect(heading.text()).toContain('Heading');
    expect(paragraph.text()).toContain('Para1');
    expect(img.attributes('src')).toContain('img1.jpg');
    expect(cta.attributes('href')).toContain('google.com');
    expect(cta.text()).toContain('Action');
  })
})
