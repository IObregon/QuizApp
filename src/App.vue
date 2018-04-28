<template>
  <div id="app">
    <QuizComponent> </QuizComponent>
  </div>
</template>

<script>
import QuizComponent from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    QuizComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
