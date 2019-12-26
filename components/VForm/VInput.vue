<template>
  <div class="input" :class="type === 'select' ? `input--select ${mod}` : mod">
    <input
      class="input__field"
      :type="type"
      :name="name"
      :id="id"
      v-model="content"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    },
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    mod: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    // model: {
    //   type: F
    // }
  },
}
</script>

<style lang="sass" scoped>
@import '@/sass/helpers/_variables'
@import '@/sass/helpers/_mixins'

.input
  &__field
    width: 100%
    height: em(40)
    border: 2px solid $black
    border-radius: 3px
    padding: 0.5em
</style>
