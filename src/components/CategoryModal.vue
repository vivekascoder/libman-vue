<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
    <div class="w-full">
      <form @submit.prevent="this.$emit('updateCategory', category)" class="bg-gray-800 mx-4 overflow-hidden relative">
        <div>
          <h1 class="bg-purple-600 text-gray-200 text-center text-xl py-2 uppercase mb-4">Update 🔄 Category</h1>
        </div>
        <div class="mx-4 mt-5">
          <input
            v-model="category.name"
            type="text" 
            @input="this.$emit('update:value', $event.target.value)"
            name="category" 
            class="w-full text-lg bg-transparent border-b-2 focus:outline-none border-pink-600 text-pink-400 placeholder-pink-300 placeholder-opacity-50 px-2 py-2" 
            placeholder="Fictional, Horror" 
            required>
        </div>
        <button class="mx-4 mt-8 px-6 py-2 bg-purple-600 text-white rounded-sm mb-6">Update 🔄 Category</button>
        <span @click="this.$emit('closeModal')" class="absolute text-white top-1 right-1 p-2 hover:bg-gray-500 hover:bg-opacity-20 rounded-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>

</style>