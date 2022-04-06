<template>
  <div
    :class="classes"
    @click="$emit('onClick', answer)"
  >
    {{ answer.value }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Answer',
  props: {
    answer: {
      id: Number,
      value: String || Number
    },
    classes: {
      type: String,
      default: 'button button_primary'
    }
  },
  emits: {
    onClick (answer: { id: number, value: string | number }) {
      return answer
    }
  }
})

export default class Answer extends Vue {}
</script>
