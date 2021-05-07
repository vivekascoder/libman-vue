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
        <input type="file" ref="file" class="hidden" accept="image/*" required/>
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
        <div class="flex items-center mt-3" v-if="imageSource">
          <button
            class="btn__toolbar" 
            type="button"
            @click="showImageModal = !showImageModal"
          >
            Preview 🎑
          </button>
          <button 
            class="btn__toolbar" 
            type="button"
            @click="deleteImage()"
          >
            Delete ❌
          </button>
        </div>
        <progress-bar :percentage="currentPercentage" :show="showProgress" />
        <div
          v-if="error"
          class="px-4 py-2 bg-pink-600 bg-opacity-30 text-pink-700 tracking-wide"
        >
          * {{ loginError.message }}
        </div>
        <button class="block__btn" @click="checkImage()">Add New Book</button>
      </form>
    </div>
    <div
      v-if="message"
      class="bg-gray-400 bg-opacity-40 backdrop-filter backgrop-blur-lg p-4 mx-4 rounded-lg mt-4 text-center text-white fixed bottom-4 left-0 right-0"
    >
      📢 {{ message }}
    </div>
    <ImageModal
      :show="showImageModal"
      :src="imageSource"
      @close-image-modal="showImageModal = !showImageModal"
    />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { createNewBook } from "@/services/firestore.js";
import { encodeImageName } from "@/services/encode.js";
import ProgressBar from "@/components/ProgressBar";
import ImageModal from "@/components/ImageModal";

export default {
  components: {
    ProgressBar,
    ImageModal,
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
      showImageModal: false,
      showProgress: false,
      imageSource: "",
      imageLocation: "",
    };
  },
  mounted() {
    this.$refs.file.addEventListener("change", this.handleFileChange);
  },
  methods: {
    checkImage() {
      if (! this.imageLocation) {
        this.displayMessage('Please select an image.')
      }
    },
    uploadImage() {
      this.$refs.file.click();
    },
    deleteImage() {
      /**
       * This method delete the image from the firebase storage
       * and clears imageSource, imageLocation and the hidden
       * file input box.
       */
      // Show the loader...
      this.showLoader.value = true

      // Start deleting the file...
      var storageRef = firebase
        .storage()
        .ref()
        .child(this.imageLocation)
        .delete()
        .then(() => {
          console.log("Deleted.");

          // Resetting the parameters.
          this.imageLocation = ''
          this.imageSource = ''
          this.$refs.file.value = ''
          // Restore the loader state...
          this.showLoader.value = false
        })
        .catch((err) => {
          console.log(`Error while deleting: ${err}`);
        });
    },
    handleFileChange() {
      let file = this.$refs.file;
      if (!file.files.length) {
        this.displayMessage("No 🤳 image selected.");
        // return
      }

      // Encoding the image and add some random strings to it.
      var imgName = encodeImageName(file.files[0].name);

      // Start showing the progress bar.
      this.showProgress = true;

      // Creating the upload task on the firebase.
      this.imageLocation = `images/${imgName}`;
      var uploadTask = firebase
        .storage()
        .ref()
        .child(this.imageLocation)
        .put(this.$refs.file.files[0]);
      console.log("Uploading...");

      // Attaching the "state_changed" event to monitor the upload progress.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.currentPercentage = Math.floor(progress);
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
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setTimeout(() => {
              this.showProgress = false;
            }, 1000);
            this.imageSource = url;
            console.log(url);
          });
        }
      );
    },
    addNewBook() {
      this.showLoader.value = true;
      createNewBook(this.bookName, this.bookAuthor, this.bookPrice, this.imageSource)
        .then(() => {
          // Resetting all the values... :)
          this.showLoader.value = false;
          this.error = "";
          this.displayMessage("New 📚️ Book Added Sucessfully.");
          this.bookAuthor = "";
          this.bookName = "";
          this.bookPrice = "";
          this.$refs.file.value = ''
          this.imageLocation = ''
          this.imageSource = ''
        })
        .catch((err) => {
          this.error = err;
          this.showLoader.value = true;
        });
    },
    displayMessage(msg) {
      /**
       * A simple function that handles the display of 
       * info message that will be removed or hidden after 
       * 3 seconds which can vary.
       */
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
.btn__toolbar {
  @apply w-1/2 bg-purple-600 text-white mx-1 py-1 rounded-sm mt-2 border-b-4 border-purple-800 hover:bg-purple-700 focus:outline-none;
}
</style>