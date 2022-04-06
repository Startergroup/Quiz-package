<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'App',
  data () {
    return {
      quizlet: {
        introductionText: 'Участвуйте в викторине и выиграйте приз от компании ***! Войдите в наш квиз и быстрее всех ответьте на вопросы.',
        duration: '05:20',
        logoURL: './logo.png',
        questions: [
          {
            id: 1,
            question: 'Какие проявления аллергии бывают?',
            answers: [
              {
                id: 1,
                value: 'Отит'
              },
              {
                id: 2,
                value: 'Зуд'
              },
              {
                id: 3,
                value: 'Покраснения кожи'
              },
              {
                id: 4,
                value: 'Все ответы верны'
              }
            ]
          },
          {
            id: 2,
            question: '2',
            answers: [
              {
                id: 5,
                value: 5
              },
              {
                id: 6,
                value: 6
              },
              {
                id: 7,
                value: 7
              },
              {
                id: 8,
                value: 8
              }
            ]
          }
        ]
      }
    }
  }
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
