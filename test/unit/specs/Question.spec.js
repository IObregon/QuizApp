import { mount } from 'vue-test-utils'
import Question from '@/components/Question'

describe('Question.vue', () => {
  it('should render a question with a correct title ', () => {
    const wrapper = mount(Question, {
      propsData: {
        title: 'Which is the largest country in the world by population?'
      }
    })
    expect(wrapper.find('span').html()).toContain('Which is the largest country in the world by population?')
  })
  it('should render a question with a correct title ', () => {
    const wrapper = mount(Question, {
      propsData: {
        options: [
          { option: 'India', correct: false },
          { option: 'USA', correct: false },
          { option: 'China', correct: true },
          { option: 'Russia', correct: false }]}
    })
    expect(wrapper.findAll('input').length).toBe(4)
  })

  it('should trigger an event when an option is selected', () => {
    const wrapper = mount(Question, {
      propsData: {
        title: 'Which is the largest country in the world by population?',
        options: [
          { option: 'India', correct: false },
          { option: 'USA', correct: false },
          { option: 'China', correct: true },
          { option: 'Russia', correct: false }]}
    })
    wrapper.find('input').trigger('click')
    expect(wrapper.emitted().questionAnswered.length).toBe(1)
  })
})
