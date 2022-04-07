<template>
  <div class="quizlet">
    <div
      v-if="!hasQuizStarted"
      class="wrapper"
    >
      <Introduction
        :title="quizlet.introductionText"
        @startGame="startGame"
      >
        <template #form="{ startQuizlet }">
          <slot
            name="introductionForm"
            :start-quizlet="startQuizlet"
          />
        </template>
      </Introduction>
    </div>

    <div
      v-else-if="currentQuestion"
      class="wrapper"
    >
      <header class="quizlet__header">
        <img
          v-if="quizlet.logoURL"
          :src="quizlet.logoURL"
          alt="Logo"
          class="logo"
        >
        <Timer :duration="quizlet.duration" />
      </header>

      <Question :value="currentQuestion.question" />

      <div class="answers">
        <Answer
          v-for="(answer, index) in currentQuestion.answers"
          :key="index"
          :answer="answer"
          @onClick="selectAnswer($event)"
        />
      </div>

      <ProgressBar
        :currentNumberQuestion="count"
        :totalNumberQuestions="getQuestions.length"
      />
    </div>

    <div v-else>
      <slot name="finalFrame">
        <p class="quizlet__finish">Спасибо за участие</p>
      </slot>
    </div>
  </div>
</template>

<script>
import Answer from './Answer.vue'
import Introduction from './Introduction.vue'
import Question from './Question.vue'
import ProgressBar from './ProgressBar.vue'
import Timer from './Timer.vue'

export default {
  name: 'Quizlet',
  props: {
    quizlet: {
      type: Object,
      required: true
    }
  },
  components: {
    Answer,
    Introduction,
    Question,
    ProgressBar,
    Timer
  },
  data () {
    return {
      count: 0,
      hasQuizStarted: false,
      results: {
        _id: null,
        answers: []
      }
    }
  },
  computed: {
    getQuestions () {
      return this.quizlet.questions
    },
    currentQuestion () {
      return this.getQuestions[this.count]
    }
  },
  methods: {
    selectAnswer (answer) {
      this.updateAnswers(answer)
      this.count++

      if (this.count === this.getQuestions.length) {
        this.results._id = this.quizlet._id
        this.$emit('finishQuizlet', { results: this.results })
      }
    },
    startGame () {
      this.hasQuizStarted = true
    },
    updateAnswers (answer) {
      this.results.answers.push(answer)
    }
  }
}
</script>
