<template>
  <div>
    <button v-if="!start" @click="startQuiz">Start Quiz</button>
    <Question v-if="isStartedAndQuestionsRemaining" :title="currentQuestion.question" :options="currentQuestion.options" @questionAnswered="questionAnswered"></Question>
    <span v-if="isStartedAndNoQuestionsRemaining"> {{calculateScore()}}</span>
  </div>
</template>

<script>
import Question from './Question.vue'
export default {
  name: 'Quiz',
  data () {
    return {
      start: false,
      questions: [
        { question: 'Which is the largest country in the world by population?',
          options: [
            { option: 'India', correct: false },
            { option: 'USA', correct: false },
            { option: 'China', correct: true },
            { option: 'Russia', correct: false }]},
        { question: 'When did the second world war end?',
          options: [
            { option: '1945', correct: true },
            { option: '1939', correct: false },
            { option: '1944', correct: false },
            { option: '1942', correct: false }]},
        { question: 'Which was the first country to issue paper currency?',
          options: [
            { option: 'USA', correct: false },
            { option: 'France', correct: false },
            { option: 'Italy', correct: false },
            { option: 'China', correct: true }]},
        { question: 'Which city hosted the 1996 Summer Olympics?',
          options: [
            { option: 'Atlanta', correct: true },
            { option: 'Sydney', correct: false },
            { option: 'Athens', correct: false },
            { option: 'Beijing', correct: false }]},
        { question: 'Who invented telephone?',
          options: [
            { option: 'Albert Einstein', correct: false },
            { option: 'Alexander Graham Bell', correct: true },
            { option: 'Isaac Newton', correct: false },
            { option: 'Marie Curie', correct: false }]
        }],
      currentQuestionIndex: 0,
      correctAnswers: 0
    }
  },
  methods: {
    startQuiz: function () {
      this.start = true
    },
    questionAnswered: function (correct) {
      if (correct) {
        this.correctAnswers++
      }
      this.currentQuestionIndex++
    },
    calculateScore: function () {
      return 'Your score is: ' + this.correctAnswers + '/' + this.questions.length
    }
  },
  computed: {
    currentQuestion: function () {
      return this.questions[this.currentQuestionIndex]
    },
    isStartedAndQuestionsRemaining: function () {
      return this.start && this.currentQuestionIndex < this.questions.length
    },
    isStartedAndNoQuestionsRemaining: function () {
      return this.start && this.currentQuestionIndex === this.questions.length
    }
  },
  components: {
    Question
  }
}
</script>
