<template>
  <li :class="className"><slot></slot></li>
</template>

<script>
  export default {
    props: {
      className: String
    }
  }
</script>


<style>

</style>