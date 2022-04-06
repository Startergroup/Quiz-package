<template>
  <div class="quizlet">
    <div
      v-if="!hasQuizStarted"
      class="wrapper"
    >
      <Introduction
        :title="quizlet.introductionText"
        @start-quizlet="startQuizlet"
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
          @on-click="selectAnswer($event)"
        />
      </div>

      <ProgressBar
        :currentNumberQuestion="count"
        :totalNumberQuestions="getQuestions.length"
      />
    </div>

    <div v-else>
      <slot name="frameFinished">
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
      introductionText: String,
      duration: String,
      logoURL: String,
      questions: [
        {
          id: String,
          question: String,
          answers: Array
        }
      ]
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
      results: []
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
      if (this.count === this.getQuestions.length) this.$emit('finishedQuizlet')
    },
    startQuizlet () {
      this.hasQuizStarted = true
    },
    updateAnswers (answer) {
      this.results.push({
        questionID: this.currentQuestion.id,
        answer
      })
    }
  }
}
</script>
