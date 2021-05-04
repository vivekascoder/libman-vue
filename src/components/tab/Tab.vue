<template>
  <div v-if="isSelected">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
    },
  },
}
</script>

<style>

</style>