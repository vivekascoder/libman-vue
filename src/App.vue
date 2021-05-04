<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
  <div v-if="showLoader.value" class="fixed inset-0 bg-black bg-opacity-70 flex z-50 items-center justify-center">
    <Loader/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  components: {
    Loader
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
</style>
