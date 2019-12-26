<template>
  <label
    :class="type === 'checkbox' ? `input input--checkbox ${mod}` : `input input--radio ${mod}`"
  >
    <input
      :type="type === 'checkbox' ? 'checkbox' : 'radio'"
      class="input__checkbox"
      @change="onChange"
    />
    <span class="input__title">{{ title }}</span>
  </label>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      this.$emit('change', e)
    },
  },
  props: {
    mod: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'checkbox',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass">
.input
  &--checkbox
    display: inline-block
</style>
