<template>
  <div class="timer button_outline">
    {{ formmatedTime }}
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  name: 'Timer',
  props: {
    duration: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      timer: null,
      currentTime: null
    }
  },
  computed: {
    formmatedTime ():string {
      let minutes: number | string = Math.floor(this.currentTime / 60)
      let seconds: number | string = this.currentTime % 60

      minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`
      seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`

      return `${minutes}:${seconds}`
    }
  },
  mounted () {
    this.currentTime = this.getSeconds(this.duration)
    this.startTimer()
  },
  unmounted () {
    this.stopTimer()
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer () {
      clearTimeout(this.timer)
    },
    getSeconds (time:string):number {
      const [minutes, seconds]:string[] = time.split(':')
      return (parseInt(minutes) * 60) + parseInt(seconds)
    }
  },
  watch: {
    currentTime (time) {
      if (time === 0) this.stopTimer()
    }
  }
})

export default class Timer extends Vue {}
</script>
