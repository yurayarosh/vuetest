<template>
  <div class="to-do-list">
    <div class="to-do-list__top">
      <div class="to-do-list__form">
        <v-input />
        <v-btn mod="btn--primary">
          add
        </v-btn>
      </div>
    </div>

    <div class="to-do-list__list"></div>

    <div class="to-do-list__bottom"></div>
  </div>
</template>

<script>
import VBtn from '@/components/VForm/VBtn'
import VInput from '@/components/VForm/VInput'

export default {
  components: {
    VBtn,
    VInput
  }
}
</script>

<style lang="sass" scoped>
.to-do-list
  &__top
</style>