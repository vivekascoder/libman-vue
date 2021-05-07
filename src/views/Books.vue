<template>
  <div class="home">
    <!-- <navbar /> -->
    <div id="books" class="mt-20 h-screen overflow-y-scroll" ref="books">
      <router-link 
        v-for="book in books"
        :key="book.id"
        :to="{name: 'Book', params: {id: book.id}}"
      >
        <div
          class="p-4 mx-3 my-2 bg-gray-200 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg flex items-center"
        >
          <div class="flex-1">
            <h1
              class="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
            >
              {{ book.name }}
            </h1>
            <p
              class="text-sm text-gray-400 mt-1 tracking-wide flex space-x-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{{ book.author }}</span>
            </p>
          </div>
          <div class="">
            <span class="text-4xl text-gray-200 px-2 pl-3"
              >{{ book.price }}$</span
            >
          </div>
        </div>
      </router-link>
      <BookPulse v-if="this.lastElement"/>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/firestore.js";
import "firebase/firestore";
import BookPulse from '@/components/BookPulse'

export default {
  name: "Home",
  components: {
    BookPulse,
  },
  inject: ["showLoader"],
  data() {
    return {
      books: [],
      showPulse: false,
      lastElement: true
    };
  },
  watch: {
    books: () => {
      console.log("Books: ", this.books.length) 
    }
  },
  methods: {
    handleScroll(e) {
      if (
        this.$refs.books.clientHeight + this.$refs.books.scrollTop >=
        this.$refs.books.scrollHeight && this.lastElement
      ) {
        this.showPulse = true
        db.collection("books")
          .orderBy("name")
          .startAfter(this.lastElement)
          .limit(10)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.docs.length < 10) {
              this.lastElement = null
            }
            querySnapshot.forEach((doc) => {
              this.books.push({...doc.data(), id: doc.id})
              this.lastElement = doc;
              // console.log(doc.id)
            });
            this.showPulse = false;
          })
          .catch((err) => {
            this.showPulse = false;
          });
      }
    },
  },
  mounted() {
    this.$refs.books.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    // this.$refs.books.removeEventListener("scroll", this.handleScroll)
  },
  created() {
    this.showPulse = true;
    db.collection("books")
      .orderBy("name")
      .limit(10)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.books.push({...doc.data(), id: doc.id});
          this.lastElement = doc;
          // console.log(doc.data())
        });
        this.showPulse = false;
        // console.log(querySnapshot.docs);
        // console.log(this.lastElement);
      })
      .catch((err) => {
        this.showPulse = false;
      });
  },
};
</script>
