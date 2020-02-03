<template>
  <div class="page">
    <div class="container">
      <h1>Page with some content</h1>

      <img class="js-lazy" src="" alt="" :data-src="require('@/static/140275-OSQB0N-357.jpg')">

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi dolor labore. Molestiae ab itaque quisquam animi non totam quod corrupti consequuntur provident vitae, tenetur doloremque eum sit! Et, ab?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log(process)
  },
  data() {
    return {

    }
  }
}
</script>

<style></style>
