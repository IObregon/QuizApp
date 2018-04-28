import { mount } from 'vue-test-utils'
import Quiz from '@/components/Quiz'

describe('Quiz.vue', () => {
  it('should render a button when created', () => {
    const wrapper = mount(Quiz)
    expect(wrapper.contains('button')).toBe(true)
  })

  it('should render a question when the button is clicked', () => {
    const wrapper = mount(Quiz)
    const startButton = wrapper.find('button')
    startButton.trigger('click')
    expect(wrapper.findAll('input').length).toBe(4)
  })

  it('should show a new question when is the previous one is answered', (done) => {
    const wrapper = mount(Quiz)
    const startButton = wrapper.find('button')
    startButton.trigger('click')
    expect(wrapper.vm.currentQuestionIndex).toBe(0)
    expect(wrapper.find('span').html()).toContain('Which is the largest country in the world by population?')
    const radio = wrapper.find('input')
    radio.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentQuestionIndex).toBe(1)
      expect(wrapper.find('span').html()).toContain('When did the second world war end?')
      done()
    })
  })

  it('should count correctly the number of correct answers', () => {
    const wrapper = mount(Quiz)
    wrapper.vm.questionAnswered(false)
    wrapper.vm.questionAnswered(true)
    wrapper.vm.questionAnswered(false)
    wrapper.vm.questionAnswered(true)
    wrapper.vm.questionAnswered(true)
    expect(wrapper.vm.correctAnswers).toBe(3)
  })
})
