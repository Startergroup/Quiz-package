<template>
  <Quizlet
    :quizlet="quizlet"
    @finishQuizlet="finishQuizlet($event)"
  >
    <template #introductionForm="{ startQuizlet }">
      <IntroductionForm :start-quizlet="startQuizlet" />
    </template>
  </Quizlet>
</template>

<script>
import IntroductionForm from '@/components/IntroductionForm.vue'
import Quizlet from '@/components/Quizlet.vue'

export default {
  name: 'App',
  components: {
    IntroductionForm,
    Quizlet
  },
  data () {
    return {
      quizlet: {
        _id: 1,
        introductionText: 'Участвуйте в викторине и выиграйте приз от компании ***! Войдите в наш квиз и быстрее всех ответьте на вопросы.',
        duration: '05:20',
        logoURL: './logo.png',
        questions: [
          {
            question: 'Какие проявления аллергии бывают?',
            answers: [
              {
                value: 'Отит'
              },
              {
                value: 'Зуд'
              },
              {
                value: 'Покраснения кожи'
              },
              {
                value: 'Все ответы верны'
              }
            ]
          },
          {
            question: '2',
            answers: [
              {
                value: 5
              },
              {
                value: 6
              },
              {
                value: 7
              },
              {
                value: 8
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    finishQuizlet (payload) {
      console.log(payload)
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
