<template>
  <div>
    <span> {{title}} </span>
    <div v-for="o in options" :key="o.option">
        <input type="radio" name="questionRadio" :value="o.option" v-model="selected">{{o.option}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['title', 'options'],
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    isCorrectAnswerd: function () {
      return this.options.find(o => o.correct).option === this.selected
    }
  },
  watch: {
    selected: function () {
      this.$emit('questionAnswered', this.isCorrectAnswerd())
    }
  }
}
</script>
