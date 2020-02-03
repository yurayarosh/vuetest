<template>
  <div class="input">
    <component
      class="input__field"
      :is="fieldName === 'textarea' ? 'textarea' : 'input'"
      :id="_uid"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >{{ fieldName === 'textarea' ? value : '' }}</component>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    fieldName: {
      type: String,
      default: 'input',
    },
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
