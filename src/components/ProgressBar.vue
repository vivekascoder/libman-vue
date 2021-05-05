<template>
  <div class="w-full p-3 mt-4 ro relative overflow-hidden rounded-lg bg-light-blue-50 bg-gray-600">
    <div ref="bar" class="transition-all duration-700 ease-linear bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 absolute left-0 top-0 bottom-0 "></div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      required: true,
      default: 0
    }
  },
  updated() {
    this.$refs.bar.style.width = `${this.percentage}%`
  }
}
</script>

<style>

</style>