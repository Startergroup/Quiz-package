# Quizlet

###Basic usage
```
<Quizlet
  :quizlet="quizlet"
  :finish-quizlet="finishHandler($event)"
>
  <template #introductionForm="{ startQuizlet }">
      <IntroductionForm :start-quizlet="startQuizlet" />
  </template>
</Quizlet>
```
IntroductionForm it's your component for processing the start of the quiz

### Props
```
quizlet: {
  _id: String,
  isActive: Boolean,
  introductionText: String,
  duration: String,
  logoURL: String,
  section: String,
  questions: Array
}

questions: [
  {
    question: String,
    answers: []
  }
]

answers: [
  {
    value: String || Number
  }
]
```

### Events
```
@finish-quizlet

returns {
  quizletID: Number,
  answers: []
}
```

###Slots
```
introductionForm
finalFrame
```
