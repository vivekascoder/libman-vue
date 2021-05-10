<template>
  <div id="#category" class="h-screen flex flex-col">
    <form @submit.prevent="addNewCategory()" class="bg-gray-800 mx-4 overflow-hidden mt-20">
      <div>
        <h1 class="bg-purple-600 text-gray-200 text-center text-xl py-2 uppercase mb-4">Create Category</h1>
      </div>
      <div class="mx-4 mt-5">
        <input
          v-model="newCategoryName"
          type="text"
          name="category" 
          class="w-full text-lg bg-transparent border-b-2 focus:outline-none border-pink-600 text-pink-400 placeholder-pink-300 placeholder-opacity-50 px-2 py-2" 
          placeholder="Fictional, Horror" 
          required
        >
      </div>
      <button class="mx-4 mt-8 px-6 py-2 bg-purple-600 text-white rounded-sm mb-6">Add 🆕 Category</button>
    </form>

    <div class="mx-4 my-4 space-y-4 rounded-sm overflow-hidden flex-1 overflow-y-scroll">
      <div 
        class="flex py-3 px-4 bg-gray-800 text-gray-200 items-center"
        v-for="category in categories"
        :key="category.id"
      >
        <div class="flex-1">
          <h1 class="text-xl"> {{category.name}} </h1>
          <p class="text-sm text-gray-500">{{category.by}}</p>
        </div>
        <span 
          @click="openUpdateModal(category)"
          class="p-2 hover:bg-gray-500 hover:bg-opacity-20 rounded-full cursor-pointer mr-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </span>
        <span
          @click="deleteCategory(category)"
          class="p-2 hover:bg-gray-500 hover:bg-opacity-20 rounded-full cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span>
      </div>
    </div>
    <CategoryModal
      :show="showModal"
      :category="currentCategory"
      @close-modal="showModal = false"
      @update:value="currentCategory.name=$event"
      @update-category="updateCategory($event)"
    />
  </div>
</template>

<script>
import CategoryModal from '@/components/CategoryModal'
import {db} from '@/services/firestore.js'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: {
    CategoryModal
  },
  inject: ['showLoader'],
  data() {
    return {
      showModal: false,
      currentCategory: Object,
      newCategoryName: '',
      categories: []
    }
  },
  async mounted() {
    // Fetch the categories from the database and 
    // populate the categories list.
    db.collection('categories').orderBy('name').onSnapshot(
      (querySnapshot) => {
        let allCategories = []
        querySnapshot.forEach((doc) => {
          allCategories.push({
            ...doc.data(),
            id: doc.id
          })
        })
        this.categories = allCategories
        this.newCategoryName = ''
      }
    )
  },
  methods: {
    updateCategory(currentCategory) {
      // Hide the modal.
      this.showModal = false

      // Update the category object...
      const category = db.collection('categories').doc(currentCategory.id)
      category.set({
        name: currentCategory.name,
        by: currentCategory.by,
      })
    },
    async deleteCategory(category) {
      try {
      await db.collection('categories').doc(category.id).delete()
      }
      catch (err) {
        console.error(err);
      }
    },
    openUpdateModal(category) {
      console.log(category.name);
      console.log(typeof category); 
      this.currentCategory = category
      this.showModal = true
      console.log(this.showModal);
    },
    async addNewCategory() {
      if (this.newCategoryName.trim()) {
        let user;
        await firebase.auth().onAuthStateChanged((currentUser) => {
          if (currentUser) {
            user = currentUser
            // console.log('found....', user);
          }
        })
        let newCategory = db.collection('categories').doc()
        // console.log(user);
        try {
          await newCategory.set({
            name: this.newCategoryName,
            by: user.email
          })
        } 
        catch(err) {
          console.error(err);
        }
      }
    }
  },
  created() {
    console.log("Category Page...");
  }
}
</script>

<style>

</style>