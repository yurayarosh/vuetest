<template>
  <div class="input" :class="type === 'select' ? `input--select ${mod}` : mod">
    <input
      class="input__field"
      :type="type"
      :name="name"
      :id="id"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onInput(e) {
      this.$emit('input', e)
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

<style lang="sass">
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
