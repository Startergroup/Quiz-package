<template>
  <div class="question">
    <h2 class="question__h2">{{ value }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Answer from '@/components/Answer.vue'

@Options({
  name: 'Question',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  components: {
    Answer
  }
})

export default class Question extends Vue {}
</script>
