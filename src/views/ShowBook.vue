/**
 * This view will come into play when someone clicks 
 * on a specific book on the `/books` page. 
 * It'll display more information along with the status 
 * of wether the book is active for issuing or not.
 */
<template>
  <div class="overflow-hidden relative">
    <img :src="book.imageUrl" class="object-cover w-full h-96" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-transparent to-transparent z-0"
    ></div>
  </div>
  <div>
    <h1 class="tracking-wide text-xl text-pink-600 uppercase p-4 pb-0">
      {{ book.name }}
    </h1>
    <div class="flex items-center space-x-1 text-gray-400 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ book.author }}</span>
    </div>
    <div
      class="flex items-center justify-center bg-pink-600 py-4 my-4 text-6xl text-white"
      id="price"
    >
      <h2 class="px-4">${{ book.price }}</h2>
    </div>
    <div class="flex justify-center space-x-4">
      <button
        class="bg-purple-700 hover:bg-purple-800 text-white px-8 rounded-md py-2"
        @click="this.$router.push({name: 'UpdateBook', params: {id: book.id}})"
      >
        Update 🔄
      </button>
      <button
        class="bg-purple-700 hover:bg-purple-800 text-white px-8 rounded-md py-2"
        @click="deleteBook(book.id)"
      >
        Delete ❌
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/firestore.js";

export default {
  data() {
    return {
      book: Object,
    };
  },
  inject: ["showLoader"],
  methods: {
    async deleteBook(bookId) {
      this.showLoader.value = true;
      try {
        await db.collection("books").doc(bookId).delete();
        this.showLoader.value = false;
        this.$router.push({ name: "Books" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    try {
      // Showing the loader while loading the data...
      this.showLoader.value = true;

      // Start fetching the data from firebase...
      var id = this.$route.params.id;
      const doc = await db.collection("books").doc(id).get();
      if (doc.exists) {
        this.book = {...doc.data(), id: doc.id};
        console.log(doc.data());
      } else {
        console.error(`The book with id ${id} doesn't exists.`);
      }

      // Hiding the loader after loading the data...
      this.showLoader.value = false;
    } catch (err) {
      console.error("ShowBook :: 80 :: ", err);
    }
  },
};
</script>

<style>
#price {
  background-color: #be185d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23111827' fill-opacity='1'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>