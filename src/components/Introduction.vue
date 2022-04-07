<template>
  <div class="introduction">
    <h2 class="introduction__title">{{ title }}</h2>
    <slot
      name="form"
      :start-quizlet="handleClick"
    />
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleClick (func = () => {}) {
      await func()
      this.$emit('startGame')
    }
  }
}
</script>
