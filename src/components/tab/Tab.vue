<template>
    <div>
  <transition name="slidex" mode="out-in">
      <slot  v-if="isSelected"/>
  </transition>
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

<style scoped>
.slidex-enter-from {
  transform: translateX(100%);
  /* opacity: 0; */
}
.slidex-enter-to {
  transform: translateX(0);
}
.slidex-leave-from {
  transform: translateX(0);
}
.slidex-leave-to {
  transform: translateX(-100%);
}
.slidex-leave-active, .sliderx-enter-active {
  transition: 300ms all ease;
}
</style>