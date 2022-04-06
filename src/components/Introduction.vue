<template>
  <div class="introduction">
    <h2 class="introduction__title">{{ title }}</h2>
    <slot
      name="form"
      :start-quizlet="handleClick"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  name: 'Introduction',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleClick (func: () => void = () => false) {
      await func()
      this.$emit('startQuizlet')
    }
  }
})

export default class Introduction extends Vue {}
</script>
