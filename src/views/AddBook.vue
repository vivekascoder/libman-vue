<template>
  <div>
    <navbar/>
    <div class="mx-4 bg-gray-800 p-4 mt-20">
      <h1 class="form__heading">Add New 📗 Book</h1>
      <form @submit.prevent="addNewBook()">
        <input v-model="bookName" class="input__text" type="text" placeholder="Power of Habits." required>
        <input v-model="bookAuthor" class="input__text" type="text" placeholder="Stephen Hawking" required>
        <input v-model="bookPrice" class="input__text" type="number" placeholder="23.32$" required>
        <div v-if="error" class="px-4 py-2 bg-pink-600 bg-opacity-30 text-pink-700 tracking-wide">* {{loginError.message}}</div>
        <button class="block__btn">Add New Book</button>
      </form>
    </div>
    <div v-if="message" class="bg-gray-400 bg-opacity-40 backdrop-filter backgrop-blur-lg p-4 mx-4 rounded-lg mt-4 text-center text-white fixed bottom-4 left-0 right-0">
      📢 {{message}}
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar'
import {createNewBook} from '@/services/firestore.js'

export default {
  components: { Navbar },
  inject: ['showLoader'],
  data() {
    return {
      bookName: '',
      bookAuthor: '',
      bookPrice: '',
      error: '',
      message: '',
    }
  },
  methods: {
    addNewBook() {
      this.showLoader.value = true
      createNewBook(this.bookName, this.bookAuthor, this.bookPrice)
      .then(()=> {
        console.log('Done');
        this.showLoader.value = false
        this.error = ''
        this.displayMessage("New 📚️ Book Added Sucessfully.")
        this.bookAuthor = ''
        this.bookName = ''
        this.bookPrice = ''
      })
      .catch((err) => {
        this.error = err
        this.showLoader.value = true
      })
    },
    displayMessage(msg) {
      this.message = msg
      setTimeout(()=> {
        this.message = ''
      }, 3000)
    }
  }
}
</script>

<style lang="postcss">
.block__btn {
  @apply text-white;
}
</style>