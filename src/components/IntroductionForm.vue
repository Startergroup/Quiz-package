<template>
  <form action="" class="introduction__form">
    <input
      v-model="username"
      type="text"
      :class="[
        'introduction__input',
        { 'introduction__input_error' : isError }
      ]"
      placeholder="Введите ваше имя"
    >

    <button
      class="introduction__button button button_primary"
      @click.prevent="handleClick"
    >
      Учавствую!
    </button>
  </form>
</template>

<script>
export default {
  name: 'IntroductionForm',
  props: {
    startQuizlet: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      username: null,
      isError: false,
      usernameKey: 'werialUsername'
    }
  },
  mounted () {
    this.getUsername()
  },
  methods: {
    getUsername () {
      this.username = localStorage.getItem(this.usernameKey)
    },
    setUsername () {
      localStorage.setItem(this.usernameKey, this.username)
    },
    handleClick () {
      const isFilledUsername = Boolean(this.username)

      if (isFilledUsername) {
        this.isError = false
        this.setUsername()
        this.startQuizlet()
      } else {
        this.isError = true
      }
    }
  }
}
</script>
