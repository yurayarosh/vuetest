<template>
  <div class="input" :class="type === 'select' ? `input--select ${mod}` : mod">
    <select v-if="type === 'select'" :name="name" :id="id"></select>

    <input v-else class="input__field" :type="type" :name="name" :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
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
  },
}
</script>
