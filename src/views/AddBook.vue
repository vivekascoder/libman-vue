<template>
  <div>
    <div class="mx-4 bg-gray-800 p-4 mt-20">
      <h1 class="form__heading">Add New 📗 Book</h1>
      <form @submit.prevent="addNewBook()">
        <input
          v-model="bookName"
          class="input__text"
          type="text"
          placeholder="Power of Habits."
          required
        />
        <input
          v-model="bookAuthor"
          class="input__text"
          type="text"
          placeholder="Stephen Hawking"
          required
        />
        <input
          v-model="bookPrice"
          class="input__text"
          type="number"
          placeholder="23.32$"
          required
        />
        <input type="file" ref="file" class="hidden" accept="image/*" />
        <button type="button" class="upload_block__btn" @click="uploadImage()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span>Upload Image</span>
        </button>
        <progress-bar :percentage="currentPercentage" />
        <div
          v-if="error"
          class="px-4 py-2 bg-pink-600 bg-opacity-30 text-pink-700 tracking-wide"
        >
          * {{ loginError.message }}
        </div>
        <button class="block__btn">Add New Book</button>
      </form>
    </div>
    <div
      v-if="message"
      class="bg-gray-400 bg-opacity-40 backdrop-filter backgrop-blur-lg p-4 mx-4 rounded-lg mt-4 text-center text-white fixed bottom-4 left-0 right-0"
    >
      📢 {{ message }}
    </div>

    <button @click="uploadImage()">Upload Image 🤳</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { createNewBook } from "@/services/firestore.js";
import { encodeImageName } from "@/services/encode.js";
import ProgressBar from "@/components/ProgressBar";

export default {
  components: {
    ProgressBar,
  },
  inject: ["showLoader"],
  data() {
    return {
      bookName: "",
      bookAuthor: "",
      bookPrice: "",
      error: "",
      message: "",
      currentPercentage: 0,
    };
  },
  mounted() {
    this.$refs.file.addEventListener("change", this.handleFileChange);
  },
  methods: {
    uploadImage() {
      this.$refs.file.click();
    },
    handleFileChange() {
      let file = this.$refs.file;
      if (!file.length) {
        this.displayMessage("No 🤳 image selected.");
        // return
      }
      console.log(file.files[0]);
      var imgName = encodeImageName(file.files[0].name);
      var uploadTask = firebase
        .storage()
        .ref()
        .child(`images/${imgName}`)
        .put(this.$refs.file.files[0]);
      console.log("Uploading...");

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.currentPercentage = Math.floor(progress)
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log("Some Error: ", error);
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((url) => console.log(url));
        }
      );
      // .then((snapshot) => {
      //   console.log("Uploaded File");
      //   console.log(snapshot);
      //   snapshot.ref.getDownloadURL().then((u) => console.log("Url: ", u));
      // });
    },
    addNewBook() {
      this.showLoader.value = true;
      createNewBook(this.bookName, this.bookAuthor, this.bookPrice)
        .then(() => {
          console.log("Done");
          this.showLoader.value = false;
          this.error = "";
          this.displayMessage("New 📚️ Book Added Sucessfully.");
          this.bookAuthor = "";
          this.bookName = "";
          this.bookPrice = "";
        })
        .catch((err) => {
          this.error = err;
          this.showLoader.value = true;
        });
    },
    displayMessage(msg) {
      this.message = msg;
      setTimeout(() => {
        this.message = "";
      }, 3000);
    },
  },
};
</script>

<style lang="postcss">
.block__btn {
  @apply text-white;
}
.upload_block__btn {
  @apply flex w-full py-2 rounded-lg items-center justify-center text-white space-x-2 bg-pink-600 uppercase tracking-wider text-sm;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-pink-600 focus:ring-offset-gray-800;
}
</style>