<template>
  <div class="to-do-list">
    <div class="to-do-list__top">
      <form class="to-do-list__form" action="" @submit.prevent="onSubmit">
        <v-input
          class="to-do-list__input"
          type="text"
          placeholder="Enter task name"
          v-model="taskTitle"
        />
        <v-btn mod="to-do-list__btn btn--primary">add</v-btn>
      </form>
    </div>

    <div v-if="items.length > 0" class="to-do-list__list">
      <div
        v-for="(item, i) in items"
        :key="i"
        :id="item.id"
        class="to-do-list__item "
        :class="{ 'to-do-list__item--done': item.isDone }"
      >
        <div class="to-do-list__item-title" @click="item.isDone = !item.isDone">
          {{ item.title }}
        </div>
        <button class="to-do-list__item-btn" @click="onDeleteBtnClick.call(null, item)">x</button>
      </div>
    </div>

    <div v-if="items.length > 0" class="to-do-list__bottom">
      <v-checkbox title="check all" mod="to-do-list__checkbox" @change="onCheckboxChange" />
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

export default {
  data() {
    return {
      items: [],
      taskTitle: '',
    }
  },
  components: {
    VBtn,
    VInput,
    VCheckbox,
  },
  methods: {
    onSubmit() {
      if (this.taskTitle.trim() !== '') {
        this.items.push({
          title: this.taskTitle,
          isDone: false,
        })
      } else {
        alert('You must write sumthing')
      }
    },
    onCheckboxChange(e) {
      this.items.forEach(item => (item.isDone = e.target.checked))
    },
    onDeleteBtnClick(currentItem) {
      this.items = this.items.filter(item => currentItem !== item)
    },
    onClearDoneClick() {
      this.items = this.items.filter(item => !item.isDone)
    },
    onClearAllClick() {
      this.items = []
    },
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
