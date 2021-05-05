<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <navbar/>
  <transition name="slide" mode="out-in">
    <router-view/>
  </transition>
  <div v-if="showLoader.value" class="fixed inset-0 bg-black bg-opacity-70 flex z-50 items-center justify-center">
    <Loader/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Loader,
    Navbar
  },
  data() {
    return {
      showLoader: {
        value: false
      }
    }
  },
  provide() {
    return {
      showLoader: this.showLoader
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  font-family: 'Oswald', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

/* *** TRANSITIONS *** */
.slide-enter-active {
  transition: all 500ms ease-in-out;
}
.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-from {
  /* background: red; */
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-leave-active {
  transition: all 500ms ease-in-out;
}
</style>
