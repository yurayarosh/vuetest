<template>
  <div class="to-do-list">
    <div class="to-do-list__top">
      <form class="to-do-list__form" action="" @submit="onSubmit">
        <v-input mod="to-do-list__input" :value="taskTitle" @input="onInput, $event" />
        <v-btn mod="to-do-list__btn btn--primary">add</v-btn>
      </form>
    </div>

    <div v-if="items.length > 0" class="to-do-list__list">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="item.isDone ? 'to-do-list__item to-do-list__item--done' : 'to-do-list__item'"
      >
        <div class="to-do-list__item-title" @click="e => onItemClick(e, item)">
          {{ item.title }}
        </div>
        <button class="to-do-list__item-btn" @click="e => onDeleteItemClick(e, item)">x</button>
      </div>
    </div>

    <div v-if="items.length > 0" class="to-do-list__bottom">
      <v-checkbox title="check all" mod="to-do-list__checkbox" @change="onCheckAllChange" />

      <div class="to-do-list__btns">
        <v-btn @click="onClearAllClick">Clear all</v-btn>
        <v-btn mod="btn--primary" @click="onClearDoneClick">Clear done</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VBtn from '@/components/VForm/VBtn'
import VInput from '@/components/VForm/VInput'
import VCheckbox from '@/components/VForm/VCheckbox'

function handleSubmit(e) {
  e.preventDefault()
  if(this.taskTitle.trim() === '') {
    alert('You should write something')
    return
  }
  this.items = [...this.items, { title: this.taskTitle }]
}

function handleDeleteItemClick(e, item) {
  e.preventDefault()
  this.items = this.items.filter(it => it !== item)
}

function handleItemClick(e, item) {
  item.isDone = !item.isDone
  this.items = [...this.items]
}

function handleClearAllClick(e) {
  this.items = []
}

function handleClearDoneClick(e) {
  this.items = this.items.filter(item => !item.isDone)
}

function handleCheckAllChange(e) {
  if (e.target.checked) {
    this.items.forEach(item => item.isDone = true)
  } else {
    this.items.forEach(item => item.isDone = false)
  }

  this.items = [...this.items]
}

export default {
  data() {
    return {
      items: [],
      onSubmit: handleSubmit.bind(this),
      onDeleteItemClick: handleDeleteItemClick.bind(this),
      onItemClick: handleItemClick.bind(this),
      onClearAllClick: handleClearAllClick.bind(this),
      onClearDoneClick: handleClearDoneClick.bind(this),
      onCheckAllChange: handleCheckAllChange.bind(this),
      onInput: (e, value) => {
        this.taskTitle = $event.target.value
        console.log(this)
        console.log({e, value})
      },
      taskTitle: '',
    }
  },
  components: {
    VBtn,
    VInput,
    VCheckbox,
  },
}
</script>

<style lang="sass" scoped>
@import '@/sass/helpers/_variables'
@import '@/sass/helpers/_mixins'
.to-do-list
  &__top
    padding-top: 30px
    padding-bottom: 30px
    background-color: $gray
  &__form
    +flex(center)
  &__input
    margin-right: 1em
    min-width: 290px
  &__item
    +flex(flex-start, center)
    &:hover
      background-color: $gray-light
    &--done
      opacity: 0.4
      position: relative

  &__item-title
    flex-grow: 1
    padding-top: 1em
    padding-bottom: 1em
    cursor: pointer
  &__item-btn
    width: 100px
    padding-top: 1em
    padding-bottom: 1em
    &:hover
      color: red
  &__checkbox
    margin-bottom: 1em
  &__bottom
    background-color: $gray
    padding-top: 30px
    padding-bottom: 30px
    text-align: center
</style>
