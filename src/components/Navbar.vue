<template>
  <div class="fixed z-50 top-0 left-0 right-0">
    <nav class="relative bg-pink-700 flex items-center text-white justify-between">
      <div class="title py-2 px-4 uppercase font-semibold text-lg">
        Lib<span class="text-gray-800 ml-1">Man</span>
      </div>
      <div class="icon px-4 py-2">
        <svg @click="showNavMenu = true" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <transition name="fade"> 
      <div 
        class="absolute z-50 bg-gray-800 inset-0 h-screen list-none "  
        v-if="showNavMenu"
      >
      
        <div class="relative pt-20">
          <router-link @click="hideMenuBar()" class="block px-6 py-3 my-2 selected" :to="{name: 'Dashboard'}">Home</router-link>
          <router-link @click="hideMenuBar()" class="block px-6 py-3 my-2 hover:bg-gray-900" to="/">Dashboard</router-link>
          <router-link @click="hideMenuBar()" class="block px-6 py-3 my-2 hover:bg-gray-900" to="/auth">Login</router-link>
          <router-link @click="hideMenuBar()" class="block px-6 py-3 my-2 hover:bg-gray-900" to="/auth">Register</router-link>
          <div v-if="isLoggedIn" class="text-pink-600 my-2 mx-4 mt-20">
            <span class="flex space-x-2 bg-pink-600 bg-opacity-30 rounded-full px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm">{{currentUser.email}}</span>
            </span>
            <a @click="logoutUser()" class="px-6 py-3 mt-4 border-2 border-pink-600 flex items-center justify-center space-x-2 text-pink-500 hover:bg-pink-500 hover:bg-opacity-10" href="#!">
              <span>Logout</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
            </a>
          </div>
          
          <span @click="showNavMenu = false" class="absolute top-2 right-2 p-3 hover:bg-gray-400 hover:bg-opacity-20 rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
      </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      showNavMenu: false,
      isLoggedIn: false,
      currentUser: ''
    }
  },
  inject: ['showLoader'],
  methods: {
    hideMenuBar() {
      this.showNavMenu = false
    },
    logoutUser() {
      this.showLoader.value = true
      // Logout the current User.
      firebase.auth().signOut()
      .then( () => {
        this.showLoader.value = false
      })
      .catch( (err) => console.log(err))
    }
  },
  created() {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.isLoggedIn = true
        this.currentUser = user
      } else {
        this.isLoggedIn = false
        this.$router.push({name: 'Auth'})
      }
    })
  }
}
</script>

<style lang="postcss" scoped>
.selected {
  @apply bg-gray-900 text-gray-200;
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
} */
.fade-enter-active, .fade-leave-active {
  transition: transform 200ms ease;
}
.fade-enter-from {
  transform: translateY(-100%);
}
.fade-enter-to {
  transform: translateY(0%);
}
.fade-leave-from {
  /* background: red; */
  transform: translateY(0%);
}
.fade-leave-to {
  transform: translateY(-100%);
}
</style>