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

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Answer from '@/components/Answer.vue'
import Introduction from '@/components/Introduction.vue'
import Question from '@/components/Question.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Timer from '@/components/Timer.vue'

@Options({
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
    getQuestions ():[] {
      return this.quizlet.questions
    },
    currentQuestion (): { id: string, question: string, answers: [] } {
      return this.getQuestions[this.count]
    }
  },
  methods: {
    selectAnswer (answer: { id: number, value: number | string }) {
      this.updateAnswers(answer)
      this.count++
      if (this.count === this.getQuestions.length) this.$emit('finishedQuizlet')
    },
    startQuizlet () {
      this.hasQuizStarted = true
    },
    updateAnswers (answer: { id: number, value: number | string }) {
      this.results.push({
        questionID: this.currentQuestion.id,
        answer
      })
    }
  }
})

export default class Quizlet extends Vue {}
</script>
