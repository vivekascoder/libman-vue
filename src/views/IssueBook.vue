<template>
  <div class="mt-20">
    <div class="m-4 bg-gray-800" v-if="book.isAvailable">
      <div class="bg-purple-600 text-center py-2 text-gray-100 uppercase text-xl mb-4">Issue Book</div>
      <div class="mx-4 flex items-center my-4">
        <!-- Contains Info about the book. -->
        <div class="flex-1">
          <h1 class="text-lg text-gray-200"><strong>Name:</strong> {{book.name}}</h1>
          <h2 class="text-gray-200"><strong>Author:</strong> {{book.author}}</h2>
          <h2 class="text-gray-200"><strong>Days:</strong> {{price}} days</h2>
        </div>
        <div>
          <h1 class="text-3xl text-white">${{book.price}}</h1>
        </div>
      </div>
      <div class="mx-4">
        <input type="range" class="w-full" min="1" max="10" v-model="price">
      </div>
      <div class="">
        <h1 class="text-gray-200 text-3xl text-center">${{price * 1.5}}</h1>
      </div>
      <div class="mx-4">
        <button @click="issueBook()" class="w-full my-6 py-3 bg-purple-600 text-white">Get the Book</button>
      </div>
    </div>
    <div>
      <h1 v-if="!book.isAvailable" class="p-6 text-3xl text-white">Hmmm! Not Available.</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import {db} from '@/services/firestore.js'

export default {
  data() {
    return {
      book: {},
      price: 1
    }
  },
  inject: ['showLoader'],
  async beforeMount() {
    this.showLoader.value = true
    let id = this.$route.params.id;
    const doc = await db.collection('books').doc(id).get();
    if (doc.exists) {
      this.book = {...doc.data(), id: doc.id}
    } else {
      console.error(`The book you want does not exists. :(`);
    }
    this.showLoader.value = false
  },
  methods: {
    async issueBook() {
      let newIssue = db.collection("issues").doc()
      try{
        await newIssue.set({
          book: this.book.id,
          name: this.book.name,
          price: this.price * 1.5,
          days: this.price,
          student: firebase.auth().currentUser.email,
          checked: false 
        })
        // Checked represents wether it's allowed or not. :)
        console.log('Created...')
      }
      catch (err) {
        console.error(err);
      }
    }
  }
}
</script>

<style>

</style>