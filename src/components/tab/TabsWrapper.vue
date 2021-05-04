<template>
  <div>
    <div class="space-x-3 mb-3"> 
      <span class="px-3 py-1 cursor-pointer border-b-2 border-transparent text-gray-200" :class="{'selected': selected == tab}" @click="setTab(tab)" v-for="tab in tabs" :key="tab" > {{tab}} </span>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array, 
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(this.selected);
  },
  methods: {
    setTab(tab) {
      this.$emit('selected', tab)
    }
  }
}
</script>

<style lang="postcss" scoped>
.selected {
  @apply text-pink-600 border-pink-600;
}
</style>